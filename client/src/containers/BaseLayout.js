import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function BaseLayout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
