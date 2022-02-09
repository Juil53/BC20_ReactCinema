import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import movieApi from "../../api/movieApi";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  TableFooter,
  IconButton,
} from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import clsx from "clsx";
import { formatPrice } from "../../Utils/formatPrice";

const useStyles = makeStyles((theme) => ({
  screen: {
    borderTop: "70px solid #555",
    borderLeft: "25px solid transparent",
    borderRight: "25px solid transparent",
    height: 0,
    width: "100%",
  },
  box: {
    maxWidth: 324,
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
  },
  seat: {
    width: 25,
    height: 25,
    borderRadius: "4px",
    margin: "1px",
    cursor: "pointer",
    fontSize: "12px",
    lineHeight: "25px",
    textAlign: "center",
  },
  seatVip: {
    border: "1px solid red",
  },
  seatNormal: {
    border: "1px solid #fff",
  },
  table: {
    maxWidth: "300px",
    margin: "0 auto",
    maxHeight: "350px",
    "& .MuiTableRow-footer": {
      position: "sticky",
      bottom: 0,
      backgroundColor: "#fff",
    },
    "&::webkit-scrollbar-track": {
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar": {
      width: "4px",
      backgroundColor: "#fff",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "10px",
      backgroundColor: "#555",
    },
  },
}));

const Seat = ({ id, onSelect, selectedSeats }) => {
  const classes = useStyles();
  const [seats, setSeats] = useState([]);
  const vipSeats = seats.filter((item) => item.loaiGhe === "Vip");
  const normalSeats = seats.filter((item) => item.loaiGhe !== "Vip");

  const toggleSelectSeat = (seat) => {
    const { maGhe, giaVe, tenGhe } = seat;
    const isSelected = selectedSeats.some((item) => item?.maGhe === maGhe);
    if (isSelected) {
      const newSelected = selectedSeats.filter((item) => item.maGhe !== maGhe);
      onSelect(newSelected);
    } else {
      onSelect((prevState) => [
        ...prevState,
        {
          maGhe,
          giaVe,
          tenGhe,
        },
      ]);
    }
  };

  const totalPrice = selectedSeats.reduce((total, seat) => {
    return total + seat?.giaVe;
  }, 0);

  useEffect(() => {
    const getSeats = async () => {
      const result = await movieApi.getSeatById(id);
      setSeats(result.danhSachGhe);
    };
    getSeats();
  }, [id]);
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={7}>
        <Box maxWidth={"300px"} margin={"0 auto"}>
          <div className={classes.screen}></div>
        </Box>
        <Box pt={4} className={classes.box}>
          {vipSeats?.map((seat) => (
            <Typography
              component="p"
              key={seat.maGhe}
              className={clsx(classes.seat, classes.seatVip)}
              onClick={() => toggleSelectSeat(seat)}
            >
              {seat.tenGhe}
            </Typography>
          ))}
        </Box>
        <Box className={classes.box}>
          {normalSeats?.map((seat) => (
            <Typography
              component="p"
              key={seat.maGhe}
              className={clsx(classes.seat, classes.seatNormal)}
              onClick={() => toggleSelectSeat(seat)}
            >
              {seat.tenGhe}
            </Typography>
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} md={5}>
        <Box>
          <Typography
            component="h6"
            fontWeight={"600"}
            textTransform={"uppercase"}
            gutterBottom
            textAlign={"center"}
          >
            Seat selected
          </Typography>
          <TableContainer component={Paper} className={classes.table}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Seat ID</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedSeats.map((seat) => (
                  <TableRow>
                    <TableCell>{seat?.tenGhe}</TableCell>
                    <TableCell>{formatPrice(seat?.giaVe)}</TableCell>
                    <TableCell>
                      <IconButton>
                        <DeleteRoundedIcon
                          onClick={() => toggleSelectSeat(seat)}
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell>Total:</TableCell>
                  <TableCell colSpan={2}>{formatPrice(totalPrice)}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Seat;
