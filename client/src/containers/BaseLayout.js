import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function BaseLayout(props) {
  return (
    <div className="baseLayoutContainer">
      <Navbar />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}
