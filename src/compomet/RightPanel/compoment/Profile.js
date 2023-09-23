import { Radio } from "@mui/material";
import { pink } from "@mui/material/colors";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function Profile() {
    const [selectedValue, setSelectedValue] = useState("b");
    const [avata, setAvata] = useState();

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: "color-radio-button-demo",
        inputProps: { "aria-label": item },
    });

    useEffect(() => {
        return () => {
            avata && URL.revokeObjectURL(avata.preview);
        };
    }, [avata]);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
            file.preview = URL.createObjectURL(file);
            setAvata(file);
        }
    };

    const day = [
        { label: 1 },
        { label: 2 },
        { label: 3 },
        { label: 4 },
        { label: 5 },
        { label: 6 },
        { label: 7 },
        { label: 8 },
        { label: 9 },
        { label: 10 },
        { label: 11 },
        { label: 12 },
    ];
    const month = [
        { label: "tháng 1" },
        { label: "tháng 2" },
        { label: "tháng 3" },
        { label: "tháng 4" },
        { label: "tháng 5" },
        { label: "tháng 6" },
        { label: "tháng 7" },
        { label: "tháng 8" },
        { label: "tháng 9" },
        { label: "tháng 10" },
        { label: "tháng 11" },
        { label: "tháng 12" },
    ];
    const years = [
        { label: 2023 },
        { label: 2022 },
        { label: 2021 },
        { label: 2020 },
        { label: 2019 },
        { label: 2018 },
        { label: 2017 },
        { label: 2016 },
        { label: 2015 },
        { label: 2014 },
        { label: 2013 },
        { label: 2012 },
        { label: 2011 },
        { label: 2010 },
        { label: 2009 },
        { label: 2008 },
        { label: 2007 },
        { label: 2006 },
        { label: 2005 },
        { label: 2004 },
        { label: 2003 },
        { label: 2002 },
        { label: 2001 },
        { label: 2000 },
        { label: 1999 },
        { label: 1998 },
        { label: 1997 },
        { label: 1996 },
        { label: 1995 },
        { label: 1994 },
        { label: 1993 },
        { label: 1992 },
        { label: 1991 },
        { label: 1990 },
        { label: 1989 },
        { label: 1988 },
        { label: 1987 },
        { label: 1986 },
        { label: 1985 },
        { label: 1984 },
        { label: 1983 },
        { label: 1982 },
        { label: 1981 },
        { label: 1980 },
        { label: 1979 },
        { label: 1978 },
        { label: 1977 },
        { label: 1976 },
        { label: 1975 },
        { label: 1974 },
        { label: 1973 },
        { label: 1972 },
        { label: 1971 },
        { label: 1970 },
    ];

    return (
        <div className="">
            <div className="flex flex-col items-start py-[20px]">
                <span className="font-semibold text-[18px]">Hồ Sơ Của Tôi</span>
                <span className="font-light">
                    Quảng lý thông tin hồ sơ để bảo mật tài khoản
                </span>
            </div>
            <div className="flex flex-row border-t-[1px] border-[#EFEFEF]">
                <div className="flex-grow pr-[30px] mt-[30px]">
                    <form>
                        <table className="w-[600px]">
                            <tbody>
                                <tr>
                                    <td className=" mt-[20px] pb-[70px]  text-right  m-w-[200px] whitespace-nowrap">
                                        <label className="text-[#999999] ">Tên đăng nhập</label>
                                    </td>
                                    <td className="pb-[25px]  pl-[20px]">
                                        <div className="border-[1px] border-[#DBDBDB] p-[12px] w-full ">
                                            <input
                                                className="text-[#333]"
                                                type="text"
                                                placeholder="lôc phan"
                                            />
                                        </div>
                                        <div className="mt-[5px] text-[#999999] text-[12px]">
                                            Tên Đăng nhập chỉ có thể thay đổi một lần.
                                        </div>
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="flex-1  pb-[25px] text-right min-w-[20%]">
                                        <div className="text-[#999999]">Tên</div>
                                    </td>
                                    <td className="pb-[25px]">
                                        <div className=" pl-[20px]">
                                            <div className="border-[1px] border-[#DBDBDB] p-[12px] w-full">
                                                <input className="outline-none" type="text" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="flex-1   text-right min-w-[20%] pb-[25px]">
                                        <div className="text-[#999999]">gmail</div>
                                    </td>
                                    <td className="pb-[25px]">
                                        <div className=" pl-[20px]">
                                            <div className=" ">Lopphanskt92@gmail.com</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="flex-1   text-right min-w-[20%] pb-[25px]">
                                        <div className="text-[#999999]">Số Điện Thoại</div>
                                    </td>
                                    <td>
                                        <div className=" pl-[20px] flex items-center  pb-[25px]">
                                            <div className=" ">0353376671</div>
                                            <div className="ml-[5px] text-[#0055AA] font-light text-[13px] underline hover:cursor-pointer">
                                                Thay Đổi
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="flex-1   text-right min-w-[20%] pb-[25px]">
                                        <div className="text-[#999999]">giới tính</div>
                                    </td>
                                    <td>
                                        <div className=" pl-[20px] flex items-center  pb-[25px]">
                                            <div className="mr-[10px]">
                                                <Radio
                                                    {...controlProps("a")}
                                                    sx={{
                                                        color: pink[800],
                                                        "&.Mui-checked": {
                                                            color: pink[600],
                                                        },
                                                        padding: "0",
                                                    }}
                                                />
                                                <label className="ml-[5px]">Nam</label>
                                            </div>
                                            <div className="mr-[10px]">
                                                <Radio
                                                    {...controlProps("b")}
                                                    sx={{
                                                        color: pink[800],
                                                        "&.Mui-checked": {
                                                            color: pink[600],
                                                        },
                                                        padding: "0",
                                                    }}
                                                />
                                                <label className="ml-[5px]">Nữ</label>
                                            </div>
                                            <div>
                                                <Radio
                                                    {...controlProps("c")}
                                                    sx={{
                                                        color: pink[800],
                                                        "&.Mui-checked": {
                                                            color: pink[600],
                                                        },
                                                        padding: "0",
                                                    }}
                                                />
                                                <label className="ml-[5px]">Khác</label>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="flex-1 mt-[30px] pb-[28px]  text-right min-w-[20%] ">
                                        <label className="text-[#999999] ">Ngày sinh</label>
                                    </td>
                                    <td className="pb-[25px]  pl-[20px] flex items-center">
                                        <div className="mr-[20px]">
                                            <Autocomplete
                                                id="combo-box-demo"
                                                options={day}
                                                sx={{ width: 150 }}
                                                renderInput={(params) => (
                                                    <TextField {...params} label="" />
                                                )}
                                            />
                                        </div>
                                        <div className="mr-[20px]">
                                            <Autocomplete
                                                id="combo-box-demo"
                                                options={month}
                                                sx={{ width: 150 }}
                                                renderInput={(params) => (
                                                    <TextField {...params} label="" />
                                                )}
                                            />
                                        </div>
                                        <div>
                                            <Autocomplete
                                                id="combo-box-demo"
                                                options={years}
                                                sx={{ width: 150 }}
                                                renderInput={(params) => (
                                                    <TextField {...params} label="" />
                                                )}
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="pl-[20px] ">
                                        <button className="bg-[#F05D41] text-white h-[40px] px-[20px] rounded-[5px] hover:bg-[#f05d40] mb-[20px]">
                                            Lưu
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
                <div className="mt-[30px] w-[250px]   ">
                    <div className="flex flex-col items-center border-l-[1px] border-[#EFEFEF]">
                        <div className="h-[110px] w-[110px] my-[20px]">
                            {avata ? (
                                <img
                                    className="w-full h-full bg-center bg-cover bg-no-repeat cursor-pointer rounded-[50%]"
                                    src={avata.preview}
                                    alt=""
                                />
                            ) : (
                                <img
                                    className="w-full h-full bg-center bg-cover bg-no-repeat cursor-pointer rounded-[50%]"
                                    src="https://down-vn.img.susercontent.com/file/4340b6bf3bed7588b53b31880d4522e0"
                                    alt=""
                                />
                            )}

                            <input
                                id="fileInput"
                                type="file"
                                className="absolute top-0 left-0 opacity-0 w-[0] h-[0] cursor-pointer"
                                onChange={handleImageUpload}
                            />
                        </div>

                        <div className="flex items-center ">
                            <button
                                onClick={() => document.getElementById("fileInput").click()}
                                className="bg-white text-gray-500 border border-opacity-25 shadow-md h-[40px] px-[20px]"
                            >
                                chọn ảnh
                            </button>
                        </div>
                        <div className="flex items-center mt-[20px]">
                            <div className="text-[#999999] text-[12px]">
                                <div>Dụng lượng file tối đa 1 MB</div>
                                <div>Định dạng:.JPEG, .PNG</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
