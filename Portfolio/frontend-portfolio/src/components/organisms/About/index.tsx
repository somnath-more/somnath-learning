import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import React from "react";

// Container for the About page
const AboutBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  height: "100vh", // Full viewport height
  width: "100vw",
  backgroundColor: "#f4f4f9", // Light background color
  color: "#333", // Dark text color for better readability
  padding: "20px",
  fontFamily: "'Roboto', sans-serif",
});

// Heading styling
const Heading = styled('h1')({
  fontSize: "3rem",
  margin: "20px 0",
  color: "#2c3e50", // Darker color for the heading
  textAlign: "center",
  fontWeight: "bold",
});

// Paragraph styling
const Paragraph = styled('p')({
  fontSize: "1.25rem",
  margin: "10px 0",
  lineHeight: "1.6",
  textAlign: "center",
  maxWidth: "800px", // Limit paragraph width
});

const About = () => {
  return (
    <AboutBox>
      <Heading>About Page</Heading>
      <Paragraph>
        Welcome to the About Page. Here, you can learn more about our project, mission, and values. 
        Our goal is to provide a comprehensive and user-friendly platform that caters to your needs. 
        We are committed to delivering exceptional quality and continuous improvement in all our endeavors.
      </Paragraph>
    </AboutBox>
  );
};

export default About;
