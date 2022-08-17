import React from "react";
import about from "../../assets/manworking.png";
import { SimpleGrid, Box, Button } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

function AboutContent() {
  return (
    <div className="wholeAbout">
      <SimpleGrid columns={2} spacing={1}>
        <Box className="Content-grid">
          <div className="about-content">
            <h3 className="aboutsubHeading">
              Designing - Developing - Problem Solving
            </h3>
            <p className="aboutContent">
              Hello I'm Santhosh. I just persuing my Computer Science and
              Engineering degree in Bachelor of Engineering at Jeppiaar
              Institute of Technology, Chennai. I am intrested in Programming
              much. And talking about my skills, I am good at python, c and
              Front-end development as well as Full Stack Development. I am good
              at React Js which is a javascript Libraby for building interactive
              web apps. <br />I was intrested in learing new things which
              excites me and I also intrested in developing some new things
              which becomes my hobby too. I like solving problems at coding
              Platforms like Hackkerrank etc. And i did a Internship at
              appsFreedom India Private Limited as a Software Developer Intern.
            </p>
          </div>
        </Box>
        <Box height="80px" className="content-grid">
          <img src={about} alt="" className="aboutImage" />
        </Box>
      </SimpleGrid>

      <Box className="Content-grid">
        <div className="quote">
          <h1 className="quoteheading">Quote ForEver</h1>
          <p className="quotecontent">
            {" "}
            &ldquo; Worthwhile taking risks and trying to do you really excited
            by. May be at the first attempt you can't do it, if you try again
            and again things going to work out in the long run. &rdquo;
          </p>
          <p className="quoteauthor"> - Sundar Pichai</p>
        </div>
      </Box>

      <Box className="Content-grid">
        <div className="form">
          <SimpleGrid columns={2} spacing={1}>
            <Box>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input />
              </FormControl>
            </Box>
            <Box style={{ marginLeft: "20px" }}>
              <FormControl isRequired>
                <FormLabel>Email ID</FormLabel>
                <Input />
              </FormControl>
            </Box>
          </SimpleGrid>

          <FormControl isRequired style={{ marginTop: "20px" }}>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Type your message here.." />
          </FormControl>
          <Button
            colorScheme="blackAlpha"
            style={{ marginTop: "20px", width: "100%" }}
          >
            Submit
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default AboutContent;
