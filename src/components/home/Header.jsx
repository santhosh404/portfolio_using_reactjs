import React from "react";
import Sit from "../../assets/download.png";
import { Stack, Badge, Grid, GridItem } from "@chakra-ui/react";

const badgeStyle = {
  borderRadius: "10px",
  padding: "3px 8px",
  textTransform: "capitalize",
  fontSize: "12px",
};

const flex = {
  display: "flex",
  justifyContent: "space-evenly"
}


function Header() {
  return (
    <div className="header">
     
          <div style={flex}>
          <div className="header-content">
            <h1 className="name">Santhosh Annamalai.</h1>

            <p className="description">
            Hello! I'm Santhosh, a MERN / Front-End Developer passionate about creating user-friendly web applications. I specialize in React.js, UI/UX design integration, state management, and API integration. With a focus on clean and scalable code, I thrive on solving complex challenges. Let's connect and explore opportunities in web development!
            <span style={{color:"#00acee", textDecoration: "underline"}}> #FrontEndDeveloper</span> <span style={{color:"#00acee", textDecoration: "underline"}}> #MERNStack</span> <span style={{color:"#00acee", textDecoration: "underline"}}> #ReactJS</span> <span style={{color:"#00acee", textDecoration: "underline"}}> #WebDev</span>
            </p>
            <Stack direction="row" mt={5}>
              <Badge colorScheme="blue" variant="subtle" style={badgeStyle}>
                Front-End / Backend
              </Badge>
              <Badge colorScheme="green" variant="subtle" style={badgeStyle}>
                MERN Stack Developer
              </Badge>
              <Badge colorScheme="blue" variant="subtle" style={badgeStyle}>
                Problem Solving
              </Badge>
            </Stack>
          </div>
          <img src={Sit} alt="" className="headerImage" />

          </div>

    </div>
  );
}
export default Header;
