import React from "react";
import { Route } from "react-router-dom";
import NavBarAdmin from "./_component/NavbarAdmin";
import Layout from "../HomeTemplate/_component/Layout/Layout";

export default function AdminTemplate(props) {
  const { exact, path, component } = props;
  return (
    <>
      <Layout>
        <NavBarAdmin />
        <Route exact={exact} path={path} component={component} />
      </Layout>
    </>
  );
}
