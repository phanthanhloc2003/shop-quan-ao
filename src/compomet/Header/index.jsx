import {
  faBell,
  faCircleQuestion,
  faEarthAmericas,
  faChevronDown,
  faCartShopping,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Auth/compoment/userSlice";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless"; 
import Wrapper from "../poper/Wrapper";
import { useEffect, useState } from "react";
import Search from "./compoment/search";
import { Avatar } from "@mui/material";
import { WrapperName } from "../poper";
import productListApi from "../../api/productListApi";
import { cartItemsCountSelector } from "../../layout/Cart/slectors";
import { useNavigate } from "react-router-dom";
import { addSearchID } from "./compoment/searchSlice";

function Header() {
  const dispatch = useDispatch();
  const cartItemsCount = useSelector(cartItemsCountSelector);

  const handleLogout = () => {
    const action = logout();
    dispatch(action);
  };
  const [values, setValues] = useState("");
  const [name, setName] = useState([]);
  const Navigate = useNavigate();

  const [tooltipVisible, setTooltipVisible] = useState(false);
  const logedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!logedInUser.id;

  const handleSearch = (values) => {
    dispatch(addSearchID(values || ""))
  
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await productListApi.getAll();

        setName(data);
      } catch (error) {
        console.log("Failed to get data", error);
      }
    };

    fetchData();
  }, []);

  const handlelogoutClick = () => {
    Navigate("/cart");
  };

  const onClickSearch = (params) => {
     dispatch(addSearchID(params || ""))
 
    
  }
  return (
    <div className="bg-[#F94C30]   ">
      <div className="w-auto max-w-[1200px] ml-auto mr-auto ">
        <div className="flex justify-between">
          <div className="flex">
            <div className="flex items-center">
              <p className="text-[#FFF6F5] text-[15px] font-light hover:text-opacity-70  hover:cursor-pointer">
                Kênh Người Bán
              </p>
              <span className="mx-[10px] text-[#FB7260] ">|</span>
              <p className="text-[#FFF6F5]  text-[15px] font-light hover:text-opacity-70  hover:cursor-pointer">
                Trở Thành Người Bán
              </p>
              <span className="mx-[10px] text-[#FB7260] ">|</span>
              <Tippy
                interactive
                placement="bottom"
                offset={[-45, 10]}
                render={(attrs) => (
                  <div className="" tabIndex="-1" {...attrs}>
                   
                  </div>
                )}
              >
                <p className="text-[#FFF6F5]  text-[15px] font-light hover:text-opacity-70  hover:cursor-pointer">
                  Tải Ứng dụng
                </p>
              </Tippy>

              <span className="mx-[10px] text-[#FB7260]">|</span>
              <div className="text-[#FFF6F5]  text-[15px] font-light  flex ">
                {" "}
                Kết Nối
                <div className="mx-[5px]">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div>
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-[#FFF6F5] text-[15px] font-light hover:text-opacity-70  hover:cursor-pointer">
              <span className="mr-[5px]">
                <FontAwesomeIcon icon={faBell} />
              </span>
              Thông Báo
            </p>
            <p className="text-[#FFF6F5] text-[15px] font-light hover:text-opacity-70  hover:cursor-pointer px-[6px]">
              <span className="mr-[5px]">
                <FontAwesomeIcon icon={faCircleQuestion} />
              </span>
              Hỗ Trợ
            </p>

            <Tippy
              interactive
              placement="bottom"
              offset={[-45, 10]}
              render={(attrs) => (
                <div className="" tabIndex="-1" {...attrs}>
                  <Wrapper>
                    <div className="ml-[20px] items-center ">
                      <p className="pt-[10px] hover:cursor-pointer hover:text-[#ee4d2d] ">
                        Tiếng Việt
                      </p>
                      <p className="mt-[10px] hover:cursor-pointer hover:text-[#ee4d2d]">
                        English
                      </p>
                    </div>
                  </Wrapper>
                </div>
              )}
            >
              <p
                className="text-[#FFF6F5] text-[15px] font-light hover:text-opacity-70  hover:cursor-pointer mx-[8px]"
                onClick={() => setTooltipVisible(!tooltipVisible)}
              >
                <span className="mr-[5px]">
                  <FontAwesomeIcon icon={faEarthAmericas} />
                </span>
                Tiếng Việt
                <span className="ml-[5px]">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </p>
            </Tippy>

            {!isLoggedIn ? (
              <div className="flex">
                <Link to="/login/register">
                  <p className="text-[#FFF6F5] text-[15px] font-medium hover:text-opacity-70 hover:cursor-pointer">
                    Đăng Ký
                  </p>
                </Link>

                <span className="mx-[10px]  text-[#FB7260]">|</span>
                <Link to="/login">
                  <p className="text-[#FFF6F5] text-[15px] font-medium hover:text-opacity-70  hover:cursor-pointer">
                    Đăng Nhập{" "}
                  </p>
                </Link>
              </div>
            ) : (
              <Tippy
                interactive
                placement="bottom"
                render={(attrs) => (
                  <div className="" tabIndex="-1" {...attrs}>
                    <WrapperName>
                      <button onClick={handleLogout}>Đăng Xuất</button>
                    </WrapperName>
                  </div>
                )}
              >
                <div className="ml-[5px] hover:cursor-pointer">
                  <Avatar
                    sx={{ width: 30, height: 30 }}
                    alt="Remy Sharp"
                    src="https://antimatter.vn/wp-content/uploads/2022/02/tai-hinh-nen-dien-thoai-cute-chat-ngau.jpg"
                  />
                </div>
              </Tippy>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center mt-[30px] px-[20px] pb-[10px]">
          <Link to="/">
            <div className="flex items-center text-[white] text-[30px]">
              <FontAwesomeIcon icon={faBagShopping} />
              <span>Shop</span>
            </div>
          </Link>

          <div className="w-[100%] px-[10px]">
            {" "}
            <Search data={name} onChange={handleSearch} onClickSearch={onClickSearch} />
          </div>
          <div className="text-[25px] text-[white] hover:cursor-pointer" onClick={handlelogoutClick}>
            <span className="relative ">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="absolute top-[-4px] right-[-4px] bg-[#fb5533] rounded-[50%] border-[white] border-[1px] text-[8px] px-[5px] py-[2px] ">
                {cartItemsCount}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
