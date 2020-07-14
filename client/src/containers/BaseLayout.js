import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";

export default function BaseLayout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
