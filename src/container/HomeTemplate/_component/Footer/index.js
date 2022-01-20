import React from "react";
import { Typography } from "@mui/material";
import { useStyles } from "../../../../styles";

export default function Footer() {
  const classes = useStyles();
  return (
    <>
      <footer className={classes.footer}>
        <Typography variant="h3" color="primary" align="center">
          Footer!
        </Typography>
        <Typography variant="h5" color="secondary" align="center">
          This is Footer
        </Typography>
      </footer>
    </>
  );
}
