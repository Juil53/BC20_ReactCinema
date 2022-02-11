import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { actAddUser } from "./modules/action";
import {useDispatch} from "react-redux";

const theme = createTheme();

export default function AddUser(props) {
  const {history} = props
  const dispatch = useDispatch();
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP07",
    maLoaiNguoiDung: "KhachHang",
    hoTen: "",
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actAddUser(state))
    history.replace("/")
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(/img/bgmoviedetail.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="account"
                label="UserID"
                name="taiKhoan"
                autoFocus
                onChange={handleOnChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="matKhau"
                label="Password"
                type="password"
                id="password"
                onChange={handleOnChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="hoTen"
                label="Full Name"
                type="text"
                id="fullname"
                onChange={handleOnChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleOnChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="sdt"
                label="Phone number"
                name="soDt"
                onChange={handleOnChange}
              />
              <div style={{ textAlign: "center" }}>
                <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Add
                </Button>
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
