import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import React from "react";
import Avatar from "@mui/material/Avatar";

// Container for the About page
const AboutBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100vh", // Full viewport height
  width: "100vw",
  background: "linear-gradient(135deg, #3a7bd5, #00d2ff)", // Sleek gradient background
  color: "#f4f4f9", // Light text color for better readability
  padding: "40px",
  fontFamily: "'Roboto', sans-serif",
  overflowY: "scroll", // Enable vertical scrolling
  overflowX: "hidden", // Disable horizontal scrolling
  boxSizing: "border-box",
});

// Heading styling with advanced animation
const Heading = styled("h1")({
  fontSize: "4rem",
  margin: "20px 0",
  color: "#fff", // White color for better contrast
  textAlign: "center",
  fontWeight: "bold",
  animation: "fadeInUp 2s ease-out",
  "@keyframes fadeInUp": {
    "0%": { opacity: 0, transform: "translateY(30px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },
});

// Subheading styling with gradient text and shadow
const SubHeading = styled("h2")({
  fontSize: "2.5rem",
  margin: "15px 0",
  color: "transparent",
  background: "linear-gradient(45deg, #ff6f61, #d73682)", // Gradient text
  backgroundClip: "text",
  textAlign: "center",
  textShadow: "3px 3px 6px rgba(0, 0, 0, 0.4)",
  transition: "transform 0.3s ease-in-out, text-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)", // Slightly scale on hover
    textShadow: "3px 3px 8px rgba(0, 0, 0, 0.6)", // Increase shadow on hover
  },
});

// Paragraph styling with subtle hover effect
const Paragraph = styled("p")({
  fontSize: "1.2rem",
  margin: "15px 0",
  lineHeight: "1.7",
  textAlign: "center",
  maxWidth: "800px", // Limit paragraph width
  color: "#eee", // Light color for readability
  transition: "color 0.9s ease-in-out, transform 0.9s ease-in-out",
  "&:hover": {
    color: "#d1d1d1", // Lighten color on hover
    transform: "translateY(-3px)", // Slight lift on hover
  },
});

// Avatar styling with detailed shadow and border
const StyledAvatar = styled(Avatar)({
  width: "180px",
  height: "180px",
  margin: "20px 0",
  border: "8px solid #fff", // Thick border
  borderRadius: "50%",
  boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)", // Deep shadow for depth
  animation: "bounceIn 1.5s ease-in-out",
  "@keyframes bounceIn": {
    "0%": {
      transform: "scale(0.5)",
      opacity: 0,
    },
    "60%": {
      transform: "scale(1.1)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(1)",
    },
  },
});

// Section styling with enhanced design
const Section = styled(Box)({
  width: "100%",
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  borderRadius: "15px",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for sections
  border: "1px solid rgba(255, 255, 255, 0.4)", // Subtle border
  marginBottom: "30px", // Space between sections
  transition: "background-color 0.3s ease-in-out, transform 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Darker on hover
    transform: "translateY(-5px)", // Slight lift on hover
  },
});

const About = () => {
  return (
    <AboutBox>
      <Heading>About Me</Heading>
      <StyledAvatar src="mypic.jpg" alt="Your Photo" />

      <Section>
        <SubHeading>Personal Details</SubHeading>
        <Paragraph>
          I am a Full Stack Developer who completed a B.Tech in 2023. My hobbies
          include playing cricket, volleyball, and reading books.
        </Paragraph>
      </Section>

      <Section>
        <SubHeading>Hobbies</SubHeading>
        <Paragraph>
          I enjoy playing cricket and volleyball during my free time. I also
          love reading books, especially in the genres of technology and
          self-improvement.
        </Paragraph>
      </Section>

      <Section>
        <SubHeading>Education</SubHeading>
        <Paragraph>
          I graduated with a B.Tech in 2023. My education has provided me with a
          strong foundation in full stack development and other relevant
          technologies.
        </Paragraph>
      </Section>

      <Section>
        <SubHeading>Professional Details</SubHeading>
        <Paragraph>
          I am currently working as a Software Engineer at Zemoso Technologies.
          I have experience in React, Spring Boot, and various other
          technologies, allowing me to contribute effectively to my team.
        </Paragraph>
      </Section>
    </AboutBox>
  );
};

export default About;
