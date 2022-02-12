import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function AdminTemplate(props) {
  const { exact, path, component } = props;
  if (localStorage.getItem("UserAdmin")) {
    return (
      <>
        {/* <NavBarAdmin /> */}
        <Route exact={exact} path={path} component={component} />
      </>
    );
  }
  return <Redirect to="/" />;
}
