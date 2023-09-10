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

export default function CartFeature() {
  const total = useSelector(cartTotalSelector);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const updatedRows = cartItems.map((item) => ({
      id: item.id,
      name: item.data[0],
      originalPrice: item.data[0].originalPrice,
      quantity: item.quantity,
      soTien: item.data[0].salePrice * item.quantity,
      thaoTac: item.data[0],
    }));
    setRows(updatedRows);
  }, [cartItems]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Tên sản phẩm",
      width: 400,
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
    { field: "originalPrice", headerName: "Giá", width: 130 },
    {
      field: "quantity",
      headerName: "Số Lượng",
      type: "number",
      width: 180,
      renderCell: (params) => (
        <TextField
          style={{ width: "50px" }}
          value={params.value}
          onChange={(event) => handleQuantityChange(event, params.row)}
        />
      ),
    },
    { field: "soTien", headerName: "Số tiền", sortable: false, width: 160 },
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

 
  const handleSubmit = (data) => {
    console.log(data)
   
  };
  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} rowHeight={150} />
      <p>tổng tiền tất cả là {total} </p>
      <ProductFrom onsubmit={handleSubmit} />
    </div>
  );
}
