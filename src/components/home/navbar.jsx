import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  Container,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import Resume from "../../assets/Santhosh_Annamalai_Resume.pdf";

function Navbar(props) {
  return (
    <div>
      <div className="navbar">
        <Container maxW="container.xs" id="navbar">
          <Flex minWidth="max-content" alignItems="center" gap="2">
            <Box p="2">
              <Heading size="md" className="heading">
                Portfolio
              </Heading>
            </Box>
            <Spacer />
            {props.page === "home" ? (
              <div gap="2" className="links">
                <Link
                  to="/"
                  className="link1"
                  style={{
                    textDecoration: "underline",
                    color: "black",
                    textDecorationColor: "#00acee",
                    textDecorationThickness: "8px"
                  }}
                >
                  Home
                </Link>
                <Link to="/projects" className="link2">
                  Projects
                </Link>
                <Link to="/about" className="link3">
                  About me
                </Link>
                <a
                  href={Resume}
                  download="MyExampleDoc"
                  target="_blank"
                  className="download"
                >
                  Download CV
                </a>
              </div>
            ) : props.page === "projects" ? (
              <div gap="2" className="links">
                <Link to="/" className="link1">
                  Home
                </Link>
                <Link
                  to="/projects"
                  className="link2"
                  style={{
                    textDecoration: "underline",
                    color: "black",
                    textDecorationColor: "#00acee",
                    textDecorationThickness: "8px"
                  }}
                >
                  Projects
                </Link>
                <Link to="/about" className="link3">
                  About me
                </Link>
                <a
                  href={Resume}
                  download="MyExampleDoc"
                  target="_blank"
                  className="download"
                >
                  Download CV
                </a>
              </div>
            ) : props.page === "about" ? (
              <div gap="2" className="links">
                <Link to="/" className="link1">
                  Home
                </Link>
                <Link to="/projects" className="link2">
                  Projects
                </Link>
                <Link
                  to="/about"
                  className="link3"
                  style={{
                    textDecoration: "underline",
                    color: "black",
                    textDecorationColor: "#00acee",
                    textDecorationThickness: "8px"
                  }}
                >
                  About me
                </Link>
                <a
                  href={Resume}
                  download="MyExampleDoc"
                  target="_blank"
                  className="download"
                >
                  Download CV
                </a>
              </div>
            ) : null}
          </Flex>
        </Container>
      </div>
    </div>
  );
}
export default Navbar;
