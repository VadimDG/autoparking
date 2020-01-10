import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./App.scss";
import FixedNavbarExample from "./components/layout";
import FooterPage from "./components/Footer";

export default function App() {
  return (
    <>
      <FixedNavbarExample />
      <FooterPage />
    </>
  );
}
