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

export default function SigupPage({ onSubmitProp }) {
  const schema = yup.object({
    identifier: yup
      .string()
      .email("vui lòng nhập đúng email")
      .required("vui lòng điền vào email"),
    password: yup
      .string()
      .min(5, "phải có ít nhất 5 ký tự")
      .required("vui lòng nhập vào gmail"),
  });

  const form = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const handleFormSubmits = async (data) => {
    const onSubmit = onSubmitProp;
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
            Sign in
          </Typography>
          <form
            onSubmit={form.handleSubmit(handleFormSubmits)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              {...form.register("identifier")}
              margin="normal"
              required
              fullWidth
              id="identifier"
              label="Email Address"
              name="identifier"
              autoComplete="email"
              autoFocus
              error={!!form.formState.errors.email}
              helperText={form.formState.errors.email?.message}
            />
            <TextField
              {...form.register("password")}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={!!form.formState.errors.password}
              helperText={form.formState.errors.password?.message}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <RouterLink  to="/login/register" variant="body2">
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
