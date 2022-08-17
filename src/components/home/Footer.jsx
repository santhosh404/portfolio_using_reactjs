import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";

function Footer() {
  const Year = new Date().getFullYear();
  return (
    <div className="Footer">
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem w="100%">
          <div className="footer-icons">
            <Tooltip label="Hackerrank">
              <a
                href="https://www.hackerrank.com/developer_perso1"
                target="_blank"
              >
                {" "}
                <i
                  className="fa-brands fa-hackerrank"
                  style={{
                    color: "#fff",
                    backgroundColor: "rgb(44,192,94)",
                    padding: "10px",
                    borderRadius: "50px",
                  }}
                ></i>
              </a>
            </Tooltip>

            <Tooltip label="Gmail">
              <a href="mailto:santhoshmathi2002@gmail.com" target="_blank">
                {" "}
                <i
                  className="fa-solid fa-envelope"
                  style={{
                    color: "#fff",
                    backgroundColor: "#c71610",
                    padding: "10px",
                    borderRadius: "50px",
                  }}
                ></i>
              </a>
            </Tooltip>

            <Tooltip label="LinkedIn">
              <a href="https://linkedin.com" target="_blank">
                {" "}
                <i
                  className="fa-brands fa-linkedin-in"
                  style={{
                    color: "#fff",
                    backgroundColor: "#0e76a8",
                    padding: "10px",
                    borderRadius: "50px",
                  }}
                ></i>
              </a>
            </Tooltip>
          </div>
        </GridItem>
        <GridItem w="100%">
          <div className="footer-logo">
            <h1>Portfolio</h1>
          </div>
        </GridItem>
        <GridItem w="100%">
          <div className="footer-copyright">
            <p>Copyright © {Year}. All Right Reserved</p>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
}
export default Footer;
