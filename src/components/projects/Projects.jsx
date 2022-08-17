import React from "react";
import Navbar from "../home/navbar";
import AllProjects from "./allProjects";
import Footer from "../home/Footer";

export default function Projects(props) {
  return (
    <div>
      <Navbar page={props.page} />
      {/* <ProjectsHeader /> */}
      <AllProjects />
      <Footer />
    </div>
  );
}
