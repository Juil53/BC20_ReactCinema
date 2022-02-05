import { useStyles } from "../../../../styles";
import * as React from 'react';
import { Toolbar } from "@mui/material";
import BackToTop from "../BackToTop/backtotop";

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <span id="back-to-top-anchor"></span>
      {children}
      <BackToTop/>
    </div>
  );
}
