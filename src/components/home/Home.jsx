import React from "react";
import Navbar from "./navbar";
import Header from "./Header";
import HomeProjects from "./projectsHome";
import Skills from "./Skills";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home(props) {
  const projects = {
    fontFamily: "Rubik Wet Paint",
    fontSize: "50px",
    fontWeight: "200",
    color: "grey",
    marginTop: "150px"
  };
  const skills = {
    fontFamily: "Rubik Wet Paint",
    fontSize: "50px",
    fontWeight: "200",
    color: "grey",
    marginTop: "70px"
  };
  return (
    <div>
      <Navbar page={props.page} />
      <Header />
      <h1 style={projects}>Projects</h1>
      
      <HomeProjects />
      <h1 style={skills}>Skills</h1>
      <Skills />
      <Footer />
    </div>
  );
}
