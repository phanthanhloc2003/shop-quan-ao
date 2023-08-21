import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import {
  faSearch,
  faRightToBracket,
  faEarthAsia,
  faGear,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";

import { Menu, Wrapper as PoperWrapper } from "../poper";
import { WrapperName } from "../poper";
import Button from "../Button";
import "tippy.js/dist/tippy.css"; // Import CSS của Tippy
import "tippy.js/animations/shift-away.css";

const Menu_Item = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    to: "/english", // Địa chỉ URL tương ứng với tiếng Anh
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: "Settings",
    to: "/settings", // Địa chỉ URL tương ứng với cài đặt
  },
  {
    icon: <FontAwesomeIcon icon={faRightToBracket} />,
    title: "Đăng nhập",
    to: "/login", // Địa chỉ URL tương ứng với đăng nhập
  },
];
const Menulist = [
  {
    title: "men",
    icon: <FontAwesomeIcon icon={faChevronRight} />,
  },
  {
    title: "women",
    icon: <FontAwesomeIcon icon={faChevronRight} />,
  },
  {
    title: "kis",
    icon: <FontAwesomeIcon icon={faChevronRight} />,
  },
];

function Header() {
  return (
    <div>
      <div className="flex w-full h-[70px] items-center bg-[#987F69] px-[30px] justify-between">
        <div className="flex items-center">
          <img
            className="w-[40px] h-[40px] object-cover rounded-[50%]"
            src="https://netlink.edu.vn/tao-logo-shop-quan-ao/imager_5041.jpg"
            alt="logo"
          />
          <div>
            <ul className="flex">
              <Link to="/">
                <li className="ml-[15px] hover:text-[#ccc] text-[white]">
                  TRANG CHỦ
                </li>
              </Link>
              <li className="ml-[10px] hover:text-[#ccc] text-[white]">
                SẢN PHẨM
              </li>
              <Tippy
                interactive
                delay={[0, 200]}
                placement="bottom-start"
                render={(attrs) => (
                  <div className="" tabIndex="-1" {...attrs}>
                    <WrapperName>
                      <Button lists={Menulist} />
                    </WrapperName>
                  </div>
                )}
              >
                <li className="ml-[10px] hover:text-[#ccc] text-[white]">
                  NEW ARRIVAL
                </li>
              </Tippy>
              <Tippy
                interactive
                placement="bottom-start"
                render={(attrs) => (
                  <div className="" tabIndex="-1" {...attrs}>
                    <WrapperName>
                      <Button lists={Menulist} />
                    </WrapperName>
                  </div>
                )}
              >
                <li className="ml-[10px] hover:text-[#ccc] text-[white]">
                  OUTLET TỪ 88K
                </li>
              </Tippy>{" "}
              <Tippy
                interactive
                placement="bottom-start"
                render={(attrs) => (
                  <div className="" tabIndex="-1" {...attrs}>
                    <WrapperName>
                      <Button lists={Menulist} />
                    </WrapperName>
                  </div>
                )}
              >
                <li className="ml-[10px] hover:text-[#ccc] text-[white]">
                  ĐỒNG GIÁ 199K
                </li>
              </Tippy>
              <li className="ml-[10px] hover:text-[#ccc] text-[white]">
                GIỚI THIỆU
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex relative">
            <input
              className="bg-[#ccc] ml-auto  outline-none rounded-[50px] p-[5px] text-[#987F69] focus:border-red-500 focus:border-[1px]"
              type="text"
              placeholder="Tìm kiếm..."
            />
            <FontAwesomeIcon
              className="absolute right-[12px] bottom-[10px]"
              icon={faSearch}
            />
          </div>

          <div className="mx-[20px] flex relative ">
            <img
              className=" text-[white]"
              src="https://theme.hstatic.net/200000642151/1001109463/14/shopping-cart-empty-side-view.png?v=35"
              width={30}
              height={30}
              alt="giỏ hàng"
            />
            <span className="w-[20px] h-[24px] bg-[#000] rounded-[50%] text-center block absolute right-[-8px] top-[-8px]">
              <span className="block  text-[white]">0</span>
            </span>
          </div>

          <Menu items = {Menu_Item}>
            <Avatar
              className=""
              alt="Remy Sharp"
              src="../../assets/images/avata.jpeg"
            />
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Header;
