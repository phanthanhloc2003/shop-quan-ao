import { Box, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';


import React from "react";

function Product({ product }) {
    const navigate = useNavigate();


    const handleClick = () => {
        navigate(`/detail/${product.id}`);

    };

    return (
        <Box
            onClick={handleClick}
            padding={1}
            className="transition-transform hover:translate-y-[-5px] hover:shadow-md"
        >
            <Box padding={1} minHeight="215px" position="relative">
                {" "}
                { }
                <img src={product.image} className="max-h-full" width="100%" />
                {product.promotionPercent == false ? (
                    ""
                ) : (
                    <Box
                        position="absolute"
                        top={7}
                        right={7}
                        bgcolor="#FFD944"
                        color="white"
                        padding="2px 5px"
                        fontSize="10px"
                        borderRadius={2}
                    >
                        {product.promotionPercent}
                    </Box>
                )}
                {product.like == false ? (
                    ""
                ) : (
                    <Box
                        position="absolute"
                        left={7}
                        top={15}
                        bgcolor="red"
                        color="white"
                        padding="1px 3px"
                        fontSize="10px"

                    >
                        {product.like}
                    </Box>
                )}
            </Box>
            <Typography className="overflow-hidden line-clamp-2" variant="body2">
                {product.name}
            </Typography>
            <Box className="flex mt-[20px]">
                {product.Listedprice == false ? (
                    ""
                ) : (
                    <Typography
                        className="line-through"
                        mr="20px"
                        color="#929292"
                        variant="body2"
                    >
                        {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                        }).format(product.Listedprice)}
                    </Typography>
                )}

                <Typography color="#EE4D2D" variant="body2">
                    {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(product.originalPrice)}
                </Typography>
            </Box>
            <Typography variant="body2">
                <Box component="span" fontSize="16px" fontWeight="bold" mr={1}></Box>
                {product.promotionPercent > 0 ? ` - ${product.promotionPercent}%` : ""}
            </Typography>
            <Typography color="#F6EB5A" fontSize={10}>
                {product.rating}
            </Typography>
            <Typography fontSize={14}>{product.address}</Typography>
        </Box>
    );
}

export default Product;
