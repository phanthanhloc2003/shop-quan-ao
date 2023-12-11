import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { removeFromCart } from "./cartSlice";
import { cartTotalSelector } from "./slectors";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ProductFrom from "../../compomet/siderba/component/ProductFrom";
import Tooltip from "@mui/material/Tooltip";
import Header from "../../compomet/Header";
import Footer from "../../compomet/footer";
import emailjs from "emailjs-com";
import { receiveProduct } from "../account/accountSlice";

export default function CartFeature() {
  const total = useSelector(cartTotalSelector);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  
   

  const product = cartItems.map(item => item.data)
  const dataValues = product.map(item => item[0])


  const [rows, setRows] = useState([]);
  // console.log(rows)
  useEffect(() => {
    const updatedRows = cartItems.map((item) => ({
      id: item.id,
      name: item.data[0],
      originalPrice: item.data[0],
      quantity: item.quantity,
      soTien: item.data[0].salePrice * item.quantity,
      thaoTac: item.data[0],
    }));
    setRows(updatedRows);
  }, [cartItems]);

  const columns = [
    {
      field: "name",
      headerName: "Tên sản phẩm",
      width: 500,
      renderCell: (cartItems) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={cartItems.row.name.image}
            alt={cartItems.value}
            style={{ marginRight: 10, width: 80, height: 80 }}
          />
          <div style={{ flex: 1, flexWrap: "wrap" }}>
            {cartItems.row.name.name}
          </div>
        </div>
      ),
    },
    {
      field: "originalPrice",
      headerName: "Đơn Giá",
      width: 170,
      renderCell: (params,index) => (
        <div className="flex" key={index} > 
          <p className="mr-[10px] text-[#757575] line-through">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(params.row.name.Listedprice)}
            </p>
          <p>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(params.row.name.salePrice)}
            </p>
          
        </div>
        
      ),
    },
    {
      field: "quantity",
      headerName: "Số Lượng",
      type: "number",
      width: 150,
      renderCell: (params) => (
        <TextField
          style={{ width: "50px"  }}
          value={params.value}
          onChange={(event) => handleQuantityChange(event, params.row)}
        />
      ),
    },
    {
      field: "soTien",
      headerName: "Số tiền",
      sortable: false,
      width: 200,
      renderCell: (params) => (
        <div className="text-[#EE4D2D]">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(params.value)}
        </div>
      ),
    },
    {
      field: "thaoTac",
      headerName: "Thao Tác",
      sortable: false,
      width: 160,
      renderCell: (cartItems) => (
        <Tooltip
          title="Xoá"
          onClick={() => handleRemoveProduct(cartItems.row.name.id)}
        >
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ),
    },
  ];

  const handleRemoveProduct = (id) => {
    dispatch(removeFromCart({ id: id }));
  };

  const handleQuantityChange = (event, row) => {
    const newQuantity = event.target.value;

    const updatedRows = rows.map((r) => {
      if (r.id === row.id) {
        console.log(r.id);
        const newSoTien = row.thaoTac.salePrice * newQuantity;
        return { ...r, quantity: newQuantity, soTien: newSoTien };
      }
      return r;
    });

    setRows(updatedRows);
  };

  const handleSubmit = (param) => {
    const { name, number, email, address } = param;
    const product = cartItems[0].data[0].name;
   

    try {
      const params = {
        from_name: name,
        phone_number: number,
        address: address,
        email_id: email,
        message: `bạn đã đặt hàng thành công ${product} `,
        total:  new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(total),
      };
  
      emailjs
        .send("service_almypss", "template_e0w3kw8", params, "JlKiXkWSnPUMGBbjL")
        .then(function (res) {
         
          alert("bạn đã đặt hành thành công");
        })
        .catch(function (error) {
          alert("Error: " + error);
        });
      const action = receiveProduct({
       
        data: rows,
      
            
      })
      dispatch(action)
    } catch (error) {
      
    }

   



      
  };
  return (
    <div>
      <Header />
      <div>
        <DataGrid rows={rows} columns={columns} rowHeight={150} />
        <div className="flex justify-end  mr-[20px] h-[50px] items-center ">
          {" "}
          <p className="font-bold text-[15px] mr-[30px]">
            tổng thanh toán sản phẩm là:{" "}
            <span className="text-[#EE4D2D]">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(total)}
            </span>{" "}
          </p>
          {cartItems.length > 0 ? <ProductFrom onsubmit={handleSubmit} /> : ""}
        </div>
      </div>

      <Footer />
    </div>
  );
}
