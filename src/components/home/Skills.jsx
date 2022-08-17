import React from "react";
import { Progress, Grid, GridItem, Container } from "@chakra-ui/react";

function Skills() {
  return (
    <div>
      <Container maxW="80%">
        <Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={2}>
            <div style={{ marginTop: "20px" }}>
              <h3 style={{ textAlign: "left", marginBottom: "10px" }}>
                HTML, CSS & JS
              </h3>
              <Progress
                colorScheme="twitter"
                size="sm"
                value={80}
                borderRadius="lg"
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <h3 style={{ textAlign: "left", marginBottom: "10px" }}>
                Programming in python
              </h3>
              <Progress
                colorScheme="twitter"
                size="sm"
                value={70}
                borderRadius="lg"
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <h3 style={{ textAlign: "left", marginBottom: "10px" }}>
                Data Structures
              </h3>
              <Progress
                colorScheme="twitter"
                size="sm"
                value={40}
                borderRadius="lg"
              />
            </div>

            <div style={{ marginTop: "20px" }}>
              <h3 style={{ textAlign: "left", marginBottom: "10px" }}>
                Programming in C
              </h3>
              <Progress
                colorScheme="twitter"
                size="sm"
                value={60}
                borderRadius="lg"
              />
            </div>
          </GridItem>
          <GridItem rowSpan={2} colSpan={2}>
            <div style={{ marginTop: "20px" }}>
              <h3 style={{ textAlign: "left", marginBottom: "10px" }}>
                React JS
              </h3>
              <Progress
                colorScheme="twitter"
                size="sm"
                value={60}
                borderRadius="lg"
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <h3 style={{ textAlign: "left", marginBottom: "10px" }}>SQL</h3>
              <Progress
                colorScheme="twitter"
                size="sm"
                value={70}
                borderRadius="lg"
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <h3 style={{ textAlign: "left", marginBottom: "10px" }}>
                Firebase
              </h3>
              <Progress
                colorScheme="twitter"
                size="sm"
                value={60}
                borderRadius="lg"
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <h3 style={{ textAlign: "left", marginBottom: "10px" }}>
                Django (Python Framework)
              </h3>
              <Progress
                colorScheme="twitter"
                size="sm"
                value={50}
                borderRadius="lg"
              />
            </div>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
}
export default Skills;
