import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { formatLongDate } from "../../Utils/formatDate";
import Selection from "./Selection";

const Ticket = ({
  showTimes,
  selectedValues,
  handleSelectChange,
  errors,
  onShowTimeId,
}) => {
  const [allTheater, setAllTheater] = useState([]);
  const [allDateTime, setAllDateTime] = useState([]);
  const [allHours, setAllHours] = useState([]);
  const [allTheaterNum, setAllTheaterNum] = useState([]);

  const findTheaterById = useCallback(
    (id) => {
      return showTimes?.filter((item) => item.maHeThongRap === id);
    },
    [showTimes]
  );
  const findAddressById = useCallback(
    (id) => {
      const filteredTheater = findTheaterById(selectedValues.theater);
      return filteredTheater[0]?.cumRapChieu?.filter(
        (item) => item.maCumRap === id
      );
    },
    [findTheaterById, selectedValues]
  );
  //handle show detail theater when change nameIdx
  useEffect(() => {
    if (selectedValues.theater !== "") {
      const theater = [];
      const filteredTheater = findTheaterById(selectedValues.theater);
      filteredTheater[0]?.cumRapChieu?.forEach((item) => theater.push(item));
      setAllTheater(theater);
    }
  }, [selectedValues, showTimes, findTheaterById]);

  // handle show unique date when change theater
  useEffect(() => {
    if (selectedValues.address !== "") {
      const dates = [];
      const filteredAddress = findAddressById(selectedValues.address);
      filteredAddress[0]?.lichChieuPhim.forEach((item) => {
        dates.push(formatLongDate(item.ngayChieuGioChieu).date);
      });
      const uniqueDates = new Set(dates);
      setAllDateTime([...uniqueDates]);
    } else {
      setAllDateTime([]);
    }
  }, [selectedValues, showTimes, findAddressById]);

  //handle show unique time with selected date
  useEffect(() => {
    if (selectedValues.datetime !== "") {
      const filteredAddress = findAddressById(selectedValues.address);
      const filteredHours = filteredAddress[0]?.lichChieuPhim.filter((item) => {
        const reverseDate = selectedValues.datetime
          .split("-")
          .reverse()
          .join("-");
        return item.ngayChieuGioChieu.includes(
          formatLongDate(reverseDate).reverseDate
        );
      });
      const arrTime = filteredHours?.map(
        (item) => formatLongDate(item.ngayChieuGioChieu).hours
      );
      const uniqueTimes = new Set(arrTime);
      setAllHours([...uniqueTimes]);
    } else {
      setAllHours([]);
    }
  }, [selectedValues, findAddressById]);

  //handle show unique theater number when select hours
  useEffect(() => {
    if (selectedValues.hours !== "") {
      const filteredAddress = findAddressById(selectedValues.address);
      const filteredTheaterNum = filteredAddress[0]?.lichChieuPhim.filter(
        (item) => {
          const reverseDate = selectedValues.datetime
            .split("-")
            .reverse()
            .join("-");
          const stringDateTime =
            formatLongDate(reverseDate).reverseDate +
            " " +
            selectedValues.hours;
          return (
            new Date(item.ngayChieuGioChieu).getTime() ===
            new Date(stringDateTime).getTime()
          );
        }
      );
      const theaterNum = filteredTheaterNum?.map((item) => item.tenRap);
      setAllTheaterNum(theaterNum);
    } else {
      setAllTheaterNum([]);
    }
  }, [selectedValues, findAddressById]);

  // get showtime id with all selected values
  useEffect(() => {
    if (selectedValues.theaternumber !== "") {
      const filteredAddress = findAddressById(selectedValues.address);
      const filteredTheaterNum = filteredAddress[0]?.lichChieuPhim.filter(
        (item) => {
          const reverseDate = selectedValues.datetime
            .split("-")
            .reverse()
            .join("-");
          const stringDateTime =
            formatLongDate(reverseDate).reverseDate +
            " " +
            selectedValues.hours;
          return (
            new Date(item.ngayChieuGioChieu).getTime() ===
            new Date(stringDateTime).getTime()
          );
        }
      );
      const filteredShowTime = filteredTheaterNum?.filter(
        (item) => (item.tenRap = selectedValues.theaternumber)
      );
      onShowTimeId(filteredShowTime[0]?.maLichChieu);
    }
  }, [selectedValues, findAddressById, onShowTimeId]);

  return (
    <Grid
      container
      sx={{
        textTransform: "capitalize",
      }}
      rowSpacing={4}
      columnSpacing={2}
    >
      <Grid item xs={12}>
        <Selection
          title="Theater"
          value={selectedValues.theater}
          onChange={handleSelectChange}
          data={showTimes}
        />
        {errors?.theater && (
          <Typography variant="subtitle2" color={"error"}>
            {errors?.theater}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        <Selection
          title="Address"
          value={selectedValues.address}
          onChange={handleSelectChange}
          data={allTheater}
        />
        {errors?.address && (
          <Typography variant="subtitle2" color={"error"}>
            {errors?.address}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Selection
          title="DateTime"
          value={selectedValues.datetime}
          onChange={handleSelectChange}
          data={allDateTime}
        />
        {errors?.datetime && (
          <Typography variant="subtitle2" color={"error"}>
            {errors?.datetime}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Selection
          title="Hours"
          value={selectedValues.hours}
          onChange={handleSelectChange}
          data={allHours}
        />
        {errors?.hours && (
          <Typography variant="subtitle2" color={"error"}>
            {errors?.hours}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12} sm={12} lg={4}>
        <Selection
          title="TheaterNumber"
          value={selectedValues.theaternumber}
          onChange={handleSelectChange}
          data={allTheaterNum}
        />
        {errors?.theaternumber && (
          <Typography variant="subtitle2" color={"error"}>
            {errors?.theaternumber}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Ticket;
