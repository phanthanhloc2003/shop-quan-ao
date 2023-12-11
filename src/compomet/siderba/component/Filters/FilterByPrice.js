import { Box, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";

function FiltersByPrice({ onChange }) {
    const [values, setValues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));

    };


    const handleSubmit = () => {

        if (onChange) onChange({
            key: 'price',
            value: values
        });
        setValues({
            salePrice_gte: 0,
            salePrice_lte: 0,
        });




    }

    return (
        <Box>
            <Typography>Giá</Typography>
            <Box>
                <TextField
                    name="salePrice_gte"
                    value={values.salePrice_gte}
                    variant="standard"
                    onChange={handleChange}
                />
                <TextField
                    name="salePrice_lte"
                    value={values.salePrice_lte}
                    variant="standard"
                    onChange={handleChange}
                />
            </Box>
            <Box className="mt-[20px] ml-[40px]">
                <Button variant="outlined" color="error" size="small" onClick={handleSubmit}>
                    Tìm kiếm
                </Button>
            </Box>
        </Box>
    );
}

export default FiltersByPrice;
