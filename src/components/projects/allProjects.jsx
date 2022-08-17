import React, { useEffect, useState } from "react";
import {
  Grid,
  GridItem,
  Container,
  Box,
  Image,
  Badge,
  Button,
  Stack,
  SimpleGrid,
  Heading
} from "@chakra-ui/react";
import allProjects from "../../allProjects";
import { Skeleton, SkeletonText } from "@chakra-ui/react";

export default function AllProjects() {
  const [Loaded, setLoaded] = useState(true);
  const [allData, setAllData] = useState(allProjects);
  const [isClickAll, setIsClickAll] = useState(false);
  const [isClickPython, setIsClickPython] = useState(false);
  const [isClickHtml, setIsClickHtml] = useState(false);
  const [isClickReact, setIsClickReact] = useState(false);

  const stylesheet = {
    border: "1px solid #00acee",
    borderRadius: "15px",
    backgroundColor: isClickAll ? "#00acee" : "#fff",
    color: isClickAll ? "#fff" : "#00acee",
    marginRight: "3px",
    padding: "2px 4px",
    fontSize: "12px"
  };
  const stylesheet1 = {
    border: "1px solid #00acee",
    borderRadius: "15px",
    backgroundColor: isClickPython ? "#00acee" : "#fff",
    color: isClickPython ? "#fff" : "#00acee",
    marginRight: "3px",
    padding: "2px 4px",
    fontSize: "12px"
  };
  const stylesheet2 = {
    border: "1px solid #00acee",
    borderRadius: "15px",
    backgroundColor: isClickHtml ? "#00acee" : "#fff",
    color: isClickHtml ? "#fff" : "#00acee",
    marginRight: "3px",
    padding: "2px 4px",
    fontSize: "12px"
  };
  const stylesheet3 = {
    border: "1px solid #00acee",
    borderRadius: "15px",
    backgroundColor: isClickReact ? "#00acee" : "#fff",
    color: isClickReact ? "#fff" : "#00acee",
    marginRight: "3px",
    padding: "2px 4px",
    fontSize: "12px"
  };

  useEffect(() => {
    setLoaded(false);
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  function handleClickAll() {
    setAllData(allProjects);
    setIsClickAll(true);
    setIsClickPython(false);
    setIsClickHtml(false);
    setIsClickReact(false);
  }
  function handleClickPython(currentTag) {
    setIsClickAll(false);
    setIsClickPython(true);
    setIsClickHtml(false);
    setIsClickReact(false);
    const filteredData = allProjects.filter((elem) => {
      return elem.tags === currentTag;
    });
    setAllData(filteredData);
  }
  function handleClickHtml(currentTag) {
    setIsClickAll(false);
    setIsClickPython(false);
    setIsClickHtml(true);
    setIsClickReact(false);
    const filteredData = allProjects.filter((elem) => {
      return elem.tags === currentTag;
    });
    setAllData(filteredData);
  }
  function handleClickReact(currentTag) {
    setIsClickAll(false);
    setIsClickPython(false);
    setIsClickHtml(false);
    setIsClickReact(true);
    const filteredData = allProjects.filter((elem) => {
      return elem.tags === currentTag;
    });
    setAllData(filteredData);
  }

  return (
    <div className="all-projects">
      <Container maxW="80%">
        <SimpleGrid columns={2}>
          <Box height="80px"></Box>
          <Box height="80px">
            <Stack direction={["4", "row"]} spacing="10px">
              <Heading as="h5" size="sm" className="filter">
                Filter using tags
              </Heading>

              <button style={stylesheet} onClick={handleClickAll}>
                All Projects
              </button>
              <button
                style={stylesheet3}
                onClick={() => handleClickReact("reactjs")}
              >
                ReactJS
              </button>

              <button
                style={stylesheet2}
                onClick={() => handleClickHtml("htmlcss")}
              >
                HTML CSS Javascript
              </button>

              <button
                style={stylesheet1}
                onClick={() => handleClickPython("python")}
              >
                Django (Python)
              </button>
            </Stack>
          </Box>
        </SimpleGrid>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} mt="5">
          {allData.map((project) => (
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
                    <SimpleGrid columns={2} spacing={10}>
                      <Box height="80px">
                        <a href={project.link} target="_blank" rel="noreferrer">
                          <Button
                            colorScheme="twitter"
                            variant="solid"
                            width="100%"
                            mt="2"
                            mb="4"
                            style={{ fontWeight: "initial" }}
                          >
                            View Project
                          </Button>
                        </a>
                      </Box>
                      <Box height="80px">
                        <a href={project.github} target="_blank" rel="noreferrer">
                          <Button
                            variant="solid"
                            width="100%"
                            mt="2"
                            mb="4"
                            colorScheme="gray"
                          >
                            <span style={{ marginRight: "5px" }}>
                              {" "}
                              <i class="fa-brands fa-github"></i>{" "}
                            </span>
                            Github
                          </Button>
                        </a>
                      </Box>
                    </SimpleGrid>
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
