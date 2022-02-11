import React from "react";
import { Route, Redirect } from "react-router-dom";
import NavBarAdmin from "./_component/NavbarAdmin";
import Layout from "../HomeTemplate/_component/Layout/Layout";

export default function AdminTemplate(props) {
  const { exact, path, component } = props;
  if (localStorage.getItem("UserAdmin")) {
    return (
      <>
        <Layout>
          <NavBarAdmin />
          <Route exact={exact} path={path} component={component} />
        </Layout>
      </>
    );
  }
  return <Redirect to="/auth" />;
}
