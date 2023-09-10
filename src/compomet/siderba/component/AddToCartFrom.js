import { Box } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function AddToCartFrom({ onSubmit = null }) {
    const logedInUser = useSelector((state) => state.user.current);
    const isLoggedIn = !!logedInUser.id;

    const navigate = useNavigate()
    const schema = yup.object().shape({
        quantity: yup
            .number()
            .min(1, "Vui lòng nhập ít nhất là 1")
            .required("Vui lòng nhập số lượng"),
    });
    const form = useForm({
        defaultValues: {
            quantity: 1,
        },
        resolver: yupResolver(schema),
    });

    const handleIncrease = () => {
        form.setValue("quantity", form.getValues("quantity") + 1);
    };

    const handleDecrease = () => {
        const currentValue = form.getValues("quantity");
        if (currentValue > 1) {
            form.setValue("quantity", currentValue - 1);
        }
    };

    const handleInput = (event) => {
        // Remove non-numeric characters
        const newValue = event.target.value.replace(/[^0-9]/g, "");
        form.setValue("quantity", newValue);
    };

    const handleSubmit = async (values) => {
        if (!isLoggedIn) {
            navigate("/login");

        }
        else {
            await onSubmit(values);
        }
    };


    return (
        <div>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <div className="flex items-center mt-[50px] ">
                    <span className="w-[110px]">Số Lượng</span>
                    <div className="border-[1px] border-[#E8E8E8]">
                        <button
                            className="w-[32px] h-[32px] border-r-[#E8E8E8] border-r-[1px]"
                            type="button"
                            onClick={handleDecrease}
                        >
                            -
                        </button>
                        <input
                            className="w-[50px] h-[32px] border-r-[#E8E8E8] border-r-[1px] text-center"
                            {...form.register("quantity")}
                            type="text"
                            label="quantity"
                            onInput={handleInput}
                            value={form.getValues("quantity")}
                        />
                        <button
                            className="w-[32px] h-[32px] "
                            type="button"
                            onClick={handleIncrease}
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className="flex mt-[50px]">
                    {" "}
                    <button className="max-w-[250px] h-[48px] px-[20px] border-[1px] border-[#EE4D2D] flex-row text-[#EE4D2D] bg-[#FFEEEA] rounded-[5px] hover:bg-[#FFC5B22E]">
                        <FontAwesomeIcon icon={faCartPlus} />
                        Thêm Giỏ Hàng
                    </button>
                    <button className="w-[180px] h-[48px] px-[20px] text-[#fff] ml-[20px] bg-[#ee4d2d] rounded-[3px] hover:bg-[#f05d40]" >Mua Ngay</button>
                </div>
            </form>
        </div>
    );
}

export default AddToCartFrom;
