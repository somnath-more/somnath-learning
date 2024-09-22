import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import React from "react";

// Styled container for the Visitor page
const VisitorBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh", // Full viewport height
  backgroundColor: "#f0f2f5", // Light grey background for a clean look
  color: "#333", // Dark text color for contrast
  fontFamily: "'Roboto', sans-serif", // Consistent font
  padding: "20px",
  textAlign: "center",
});

// Heading styling
const Heading = styled('h1')({
  fontSize: "3rem",
  color: "#2c3e50", // Darker shade for the heading
  margin: "0",
  fontWeight: "bold",
});

// Paragraph styling
const Paragraph = styled('p')({
  fontSize: "1.25rem",
  color: "#555", // Slightly lighter text color for paragraph
  marginTop: "10px",
  maxWidth: "800px", // Limit paragraph width for better readability
  lineHeight: "1.6",
});

const Visitor = () => {
  return (
    <VisitorBox>
      <Heading>Visitor Page</Heading>
      <Paragraph>This is the Visitor page. Here you can find information relevant to visitors, including instructions, guidelines, or any other important details. We strive to provide a welcoming and informative experience for all our visitors.</Paragraph>
    </VisitorBox>
  );
};

export default Visitor;
