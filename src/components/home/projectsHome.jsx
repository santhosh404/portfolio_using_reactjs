import React, { useState, useEffect } from "react";
import {
  Grid,
  GridItem,
  Container,
  Box,
  Image,
  Badge,
  Button
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Skeleton, SkeletonText } from "@chakra-ui/react";
import homeProjects from "../../homeProjects";

function HomeProjects() {
  const [Loaded, setLoaded] = useState(true);

  useEffect(() => {
    setLoaded(false);
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ marginTop: "30px", marginBottom: "10px" }}>
      <Container maxW="80%">
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {homeProjects.map((project) => (
            <GridItem w="100%">
              <Box
                maxW="md"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Skeleton height="60%" isLoaded={Loaded}>
                  <Image src={project.imageUrl} alt={project.imageAlt} />
                </Skeleton>
                <Box p="7">
                  <SkeletonText
                    mt="4"
                    noOfLines={3}
                    spacing="4"
                    isLoaded={Loaded}
                  >
                    <Box display="flex" alignItems="baseline">
                      <Badge borderRadius="full" px="2" colorScheme="twitter">
                        New
                      </Badge>
                    </Box>

                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                    >
                      {project.title}
                    </Box>

                    <Box>
                      {project.description}
                      <Box as="span" color="gray.600" fontSize="sm"></Box>
                    </Box>

                    <Box display="flex" mt="2" alignItems="center">
                      <Box as="span" ml="auto" color="gray.600" fontSize="sm">
                        {project.noOfDays}
                      </Box>
                    </Box>
                  </SkeletonText>

                  <Skeleton
                    style={{ marginTop: "35px" }}
                    height="40px"
                    borderRadius="lg"
                    isLoaded={Loaded}
                  >
                    {project.title === "Notes App using React JS" ? (
                      <Button
                        rightIcon={<ArrowForwardIcon />}
                        colorScheme="twitter"
                        variant="outline"
                        width="100%"
                        mt="2"
                        mb="4"
                        style={{ fontWeight: "initial" }}
                      >
                        View Project
                      </Button>
                    ) : project.title === "Movie Suggester webapp" ? (
                      <a
                        href="https://github.com/santhosh404/Movie-Suggester"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          rightIcon={<ArrowForwardIcon />}
                          colorScheme="twitter"
                          variant="outline"
                          width="100%"
                          mt="2"
                          mb="4"
                          style={{ fontWeight: "initial" }}
                        >
                          View Project
                        </Button>
                      </a>
                    ) : project.title === "Quiz webapp" ? (
                      <a
                        href="https://github.com/santhosh404/Quizapp-Django"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          rightIcon={<ArrowForwardIcon />}
                          colorScheme="twitter"
                          variant="outline"
                          width="100%"
                          mt="2"
                          mb="4"
                          style={{ fontWeight: "initial" }}
                        >
                          View Project
                        </Button>
                      </a>
                    ) : null}
                  </Skeleton>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
export default HomeProjects;
