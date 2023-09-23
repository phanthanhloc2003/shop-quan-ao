import { Box, Container, Grid, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

function LeftPanel() {
    const navigate = useNavigate();

    const [selectedItem, setSelectedItem] = useState("");

    const hanleItemCLick = (path) => {
        navigate(path);
        setSelectedItem(path);
    };

    return (
        <div className="px-[30px]">
            <div className="flex py-[15px] border-b-[2px] border-b-[#EFEFEF]">
                <Avatar
                    sx={{ width: 24, height: 24 }}
                    alt="Remy Sharp"
                    src="https://antimatter.vn/wp-content/uploads/2022/02/tai-hinh-nen-dien-thoai-cute-chat-ngau.jpg"
                />
                <p className="font-medium ml-2">locphan</p>
            </div>
            <div className=" mt-[30px] ">
                <div className="flex items-center mb-[10px] ">
                    <img
                        className="w-[20px] h-[20px] "
                        src="https://down-vn.img.susercontent.com/file/ba61750a46794d8847c3f463c5e71cc4"
                        alt=""
                    />
                    <span
                        onClick={() => hanleItemCLick("/account/Profile")}
                        className={`ml-[5px] font-medium
                        ${selectedItem === "/account/Profile"
                                ? "text-[#EE4D2D]"
                                : " hover:text-[#EE4D2D] "
                            }
                        `}
                    >
                        Tài khoản của tôi
                    </span>
                </div>
                <div className="flex items-center mb-[10px] ">
                    <img
                        className="w-[20px] h-[20px] "
                        src="https://down-vn.img.susercontent.com/file/f0049e9df4e536bc3e7f140d071e9078"
                        alt=""
                    />
                    <span
                        onClick={() => hanleItemCLick("/account/Order")}
                        className={`ml-[5px] font-medium
                        ${selectedItem === "/account/Order"
                                ? "text-[#EE4D2D]"
                                : " hover:text-[#EE4D2D]"
                            }
                        `}
                    >
                        Đơn Mua
                    </span>
                </div>
            </div>
        </div>
    );
}

export default LeftPanel;
