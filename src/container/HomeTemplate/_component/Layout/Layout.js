import { useStyles } from "../../../../styles";
import React from "react";

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      {children}
    </div>
  );
}
