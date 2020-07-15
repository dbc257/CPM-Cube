import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import "./BaseLayout.css";

export default function BaseLayout(props) {
  return (
    // <div>
    //   <Navbar />
    //   {props.children}
    //   <Footer />
    // </div>
    <div id="page-container">
      <div id="content-wrap">
        <Navbar />
        {props.children}
      </div>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}
