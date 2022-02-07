import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./_component/Navbar/navbar";
import Footer from "./_component/Footer";
import Layout from "./_component/Layout/Layout";
export default function HomeTemplate(props) {
  const { exact, path, component } = props;
  return (
    <>
      <Layout>
        <NavBar />
        <Route exact={exact} path={path} component={component} />
        <Footer />
      </Layout>
    </>
  );
}
