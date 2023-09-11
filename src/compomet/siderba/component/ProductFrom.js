import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

export default function ProductForm({ onsubmit }) {
    const [open, setOpen] = useState(false);

    const schema = yup.object({
        name: yup
            .string()
            .matches(
                /^[A-Za-z\s]+$/,
                "Họ và tên chỉ được chứa chữ cái và khoảng trắng"
            )
            .required("Vui lòng nhập họ và tên"),
        number: yup
            .string()
            .required("Vui lòng nhập số điện thoại")
            .matches(/^\d+$/, "Số điện thoại không hợp lệ"),

        address: yup.string().required("Vui lòng nhập địa chỉ"),
        email: yup
            .string()
            .email("Email không hợp lệ")
            .required("Vui lòng nhập email"),
    });

    const form = useForm({
        defaultValues: {
            name: "",
            number: "",

            address: "",
            email: "",
        },
        resolver: yupResolver(schema),
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleFormSubmit = async (data) => {
        console.log(data)

        if (onsubmit) {
            onsubmit(data);

        }

        form.reset();
        setOpen(false);
    };
    return (
        <div className="">
            <Button className="w-[100px]" variant="outlined" color="error" onClick={handleClickOpen}>
                Mua
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={form.handleSubmit(handleFormSubmit)}>
                    <DialogTitle>Thông tin đặt hàng</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Vui lòng nhập thông tin đặt hàng của bạn.
                        </DialogContentText>
                        <TextField
                            name="name"
                            autoFocus
                            margin="dense"
                            label="Họ và tên"
                            fullWidth
                            variant="standard"
                            {...form.register("name")}
                            error={!!form.formState.errors.name}
                            helperText={form.formState.errors.name?.message}
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            name="number"
                            label="Số Điện Thoại"
                            fullWidth
                            variant="standard"
                            {...form.register("number")}
                            error={!!form.formState.errors.number}
                            helperText={form.formState.errors.number?.message}
                        />

                        <TextField
                            name="address"
                            autoFocus
                            margin="dense"
                            label="Địa chỉ"
                            fullWidth
                            variant="standard"
                            {...form.register("address")}
                            error={!!form.formState.errors.address}
                            helperText={form.formState.errors.address?.message}
                        />

                        <TextField
                            name="email"
                            autoFocus
                            margin="dense"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"
                            {...form.register("email")}
                            error={!!form.formState.errors.email}
                            helperText={form.formState.errors.email?.message}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Mua</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}
