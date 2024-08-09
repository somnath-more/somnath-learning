import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";

const HomeBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh",
  width: "100vw",
  backgroundColor: "#282c34",
  color: "#61dafb",
  textAlign: "center",
  fontFamily: "'Roboto', sans-serif",
  padding: "20px",
});

const Heading = styled('h1')({
  fontSize: "3rem",
  margin: "0",
  fontWeight: "bold",
  animation: "fadeIn 5s ease-in-out",
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
});

const Text = styled('h2')({
  fontSize: "2rem",
  margin: "10px 0",
  fontWeight: "300",
  color: "#f0f0f0",
  animation: "fadeIn 2s ease-in-out",
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
});

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    'I am a Software Engineer',
    'I am a DevOps Engineer',
    'I am a Human',
    'I am a Developer'
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <HomeBox>
      <Heading>Welcome to My Portfolio</Heading>
      <Text>{texts[currentTextIndex]}</Text>
    </HomeBox>
  );
};

export default Home;
