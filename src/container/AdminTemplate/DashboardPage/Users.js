// import React from "react";

// const Users = () => {
//   return <div>Users</div>;
// };

// export default Users;
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import movieApi from "../../../api/movieApi";
import {
  Button,
  CircularProgress,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TableHead,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaUser } from "../../../Utils/validate";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export default function Users() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState(null);
  const [refresh, setRefresh] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [changeUser, setChangeUser] = React.useState({});
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors: errorsUser },
  } = useForm({
    resolver: yupResolver(schemaUser),
  });

  const handleClose = () => {
    setOpen(false);
    reset();
    setChangeUser({});
  };
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = (id) => {
    movieApi
      .deleteUser(id)
      .then((data) => {
        setRefresh(!refresh);
        alert("Delete user successfully");
      })
      .catch((error) => alert(`Delete failed:`, error));
  };
  const handleEdit = (user) => {
    setChangeUser(user);
    setOpen(true);
  };

  const handleChangeUser = (data) => {
    const fetchChangeUser = async () => {
      try {
        const result = await movieApi.changeUser({ ...data, maNhom: "GP07" });
        console.log(result);
        setRefresh(!refresh);
        setOpen(false);
        reset();
        alert("Update successfully!");
      } catch (e) {
        alert("Update failed!");
      }
    };
    fetchChangeUser();
  };
  React.useEffect(() => {
    const fetchAllUser = async () => {
      try {
        setLoading(true);
        const result = await movieApi.getAllUSer();
        setRows(result);
        setLoading(false);
      } catch (e) {
        setErrors(e.message);
        setLoading(false);
      }
    };
    fetchAllUser();
  }, [refresh]);
  return (
    <>
      {loading && <CircularProgress />}
      {!loading && !errors && (
        <>
          <TableContainer component={Paper}>
            <Table aria-label="custom pagination table">
              <TableHead>
                <TableRow>
                  <TableCell>Action</TableCell>
                  <TableCell>STT</TableCell>
                  <TableCell>Tài Khoản</TableCell>
                  <TableCell>Mật Khẩu</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Họ Tên</TableCell>
                  <TableCell>Loại Người Dùng</TableCell>
                  <TableCell>Số Điện Thoại</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? rows.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : rows
                ).map((row, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <Box display={"flex"}>
                        <IconButton onClick={() => handleEdit(row)}>
                          <EditIcon />
                        </IconButton>
                        <Divider orientation="vertical" flexItem />
                        <IconButton onClick={() => handleDelete(row.taiKhoan)}>
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </TableCell>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>{row.taiKhoan}</TableCell>
                    <TableCell>*********</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.hoTen}</TableCell>
                    <TableCell>{row.maLoaiNguoiDung}</TableCell>
                    <TableCell>{row.soDt}</TableCell>
                  </TableRow>
                ))}

                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow
                  sx={{ "& .MuiTableCell-root": { overflow: "unset" } }}
                >
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={3}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              component={Paper}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                maxWidth: 400,
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography
                variant="h5"
                fontWeight={"600"}
                textAlign="center"
                mb={4}
              >
                EDIT USER
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    defaultValue={changeUser?.taiKhoan}
                    id="outlined-basic"
                    label="Tài Khoản"
                    variant="outlined"
                    {...register("taiKhoan")}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  {" "}
                  <TextField
                    fullWidth
                    defaultValue={changeUser?.matKhau}
                    id="outlined-basic"
                    label="Mật khẩu"
                    variant="outlined"
                    {...register("matKhau")}
                    error={errorsUser.matKhau}
                    helperText={errorsUser.matKhau?.message}
                  />
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    defaultValue={changeUser?.hoTen}
                    label="Họ Tên"
                    variant="outlined"
                    {...register("hoTen")}
                    error={errorsUser.hoTen}
                    helperText={errorsUser.hoTen?.message}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    defaultValue={changeUser?.soDt}
                    label="Số Điện Thoại"
                    variant="outlined"
                    {...register("soDt")}
                    error={errorsUser.soDt}
                    helperText={errorsUser.soDt?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  {" "}
                  <TextField
                    fullWidth
                    defaultValue={changeUser?.email}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    {...register("email")}
                    error={errorsUser.email}
                    helperText={errorsUser.email?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Loại Người Dùng</InputLabel>
                    <Controller
                      render={({ field }) => (
                        <Select {...field}>
                          <MenuItem value="QuanTri">Quản trị</MenuItem>
                          <MenuItem value="KhachHang">Khách hàng</MenuItem>
                        </Select>
                      )}
                      control={control}
                      name="maLoaiNguoiDung"
                      label="Loại Người Dùng"
                      defaultValue={changeUser?.maLoaiNguoiDung}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Box display={"flex"} justifyContent="space-between" mt={2}>
                <Button variant="outlined" onClick={handleClose}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  onClick={handleSubmit(handleChangeUser)}
                >
                  Change
                </Button>
              </Box>
            </Box>
          </Modal>
        </>
      )}
      {errors && <Typography>{errors}</Typography>}
    </>
  );
}
