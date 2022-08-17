import React from "react";
import Sit from "../../assets/download.png";
import { Grid, GridItem } from "@chakra-ui/react";

function Header() {
  return (
    <div className="header">
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem w="100%" h="10" className="Content-grid">
          <div className="header-content">
            <h1 className="name">Ethan Jones.</h1>

            <p style={{ fontSize: "20px" }}>
              Hello, my name is Ethan Jones. I am Web Developer and Programmer.
            </p>

            <ul className="skills-ul">
              <li>Web Development</li>
              <li>Problem Solving</li>
              <li>Programming</li>
              <li>Front-End</li>
            </ul>
          </div>
        </GridItem>
        <GridItem w="100%" h="10">
          <img src={Sit} alt="" className="headerImage" />
        </GridItem>
      </Grid>
    </div>
  );
}
export default Header;
