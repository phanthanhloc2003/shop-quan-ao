import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LinearProgress } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const defaultTheme = createTheme();

export default function RegisterPage({ onSubmitProp }) {
  const schema = yup.object({
    firstName: yup.string().required("Vui lòng nhập tên"),
    lastName: yup.string().required("Vui lòng nhập họ"),
    email: yup
      .string()
      .email("Email không hợp lệ")
      .required("Vui lòng nhập email"),
    password: yup
      .string()
      .min(5, "Mật khẩu phải có ít nhất 5 ký tự")
      .required("Vui lòng nhập mật khẩu"),
  });

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (data) => {
    // Thêm async
    const onSubmit = onSubmitProp; // Sử dụng tên onSubmitProp từ prop
    if (onSubmit) {
      await onSubmit(data);
    }

    form.reset();
  };

  const { isSubmitting } = form.formState;

  return (
    <ThemeProvider theme={defaultTheme}>
      {isSubmitting && <LinearProgress />}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
             Đăng Ký
          </Typography>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...form.register("firstName")}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  error={!!form.formState.errors.firstName}
                  helperText={form.formState.errors.firstName?.message}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...form.register("lastName")}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  error={!!form.formState.errors.lastName}
                  helperText={form.formState.errors.lastName?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...form.register("email")}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={!!form.formState.errors.email}
                  helperText={form.formState.errors.email?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...form.register("password")}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={!!form.formState.errors.password}
                  helperText={form.formState.errors.password?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              disabled={isSubmitting}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <RouterLink to="/login" variant="body2">
                  Already have an account? Sign in
                </RouterLink>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
