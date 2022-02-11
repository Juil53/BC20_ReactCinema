import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const Selection = ({ title, value, onChange, data }) => {
  return (
    <FormControl sx={{ width: "100%" }}>
      <InputLabel>{title}</InputLabel>
      <Select
        value={value}
        label={title}
        name={title.toLowerCase()}
        onChange={onChange}
      >
        {data?.map((item, i) => (
          <MenuItem
            key={i}
            value={
              title === "Theater"
                ? item.maHeThongRap
                : title === "Address"
                ? item.maCumRap
                : item
            }
          >
            {title === "Theater"
              ? item.tenHeThongRap
              : title === "Address"
              ? item.tenCumRap + " - " + item.diaChi
              : item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Selection;
