import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import React from "react";
const AboutBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  height: "auto",
  width: "100vw",
  backgroundColor: "lightgray",
});
const About = () => {
  return (
    <AboutBox>
      <h1>About Page</h1>
      <p>This is the about page</p>
    </AboutBox>
  );
};

export default About;
