import React from "react";
import Navbar from "../home/navbar";
import Footer from "../home/Footer";
import AboutContent from "./aboutContent";

export default function About(props) {
  return (
    <div>
      <Navbar page={props.page} />
      <AboutContent />
      <Footer />
    </div>
  );
}
