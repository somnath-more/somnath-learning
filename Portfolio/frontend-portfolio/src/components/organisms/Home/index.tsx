import styled from "@emotion/styled";
import { IconButton, Box, Tooltip } from "@mui/material";
import React, { useState, useEffect } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const HomeBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100vw",
  height: "90vh",
  backgroundColor: "#282c34",
  color: "#61dafb",
  textAlign: "center",
  fontFamily: "'Roboto', sans-serif",
  padding: "20px",
  margin: 0,
  // backgroundImage: `url(${"sunset.jpg"})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",

});

const Heading = styled("h1")({
  fontSize: "3rem",
  margin: "0",
  fontWeight: "bold",
  animation: "fadeIn 5s ease-in-out",
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
});

const Text = styled("h2")({
  fontSize: "2rem",
  margin: "10px 0",
  fontWeight: "300",
  color: "#f0f0f0",
  animation: "fadeIn 2s ease-in-out",
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
});

const StyledIconButton = styled(IconButton)(({ theme, bgcolor }: any) => ({
  color: "#fff",
  backgroundColor: bgcolor,
  margin: "10px",
  "&:hover": {
    backgroundColor: bgcolor,
    opacity: 0.8,
  },
  transition: "all 0.3s ease-in-out",
  width: "60px",
  height: "60px",
}));

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    "I am a Software Engineer",
    "I am a DevOps Engineer",
    "I am a Human",
    "I am a Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <HomeBox>
      <Heading>Welcome to My Portfolio</Heading>
      <Text>{texts[currentTextIndex]}</Text>

      <Box sx={{ display: "flex", gap: 2, mt: "30px" }}>
  <a href="https://www.linkedin.com/in/somnathmore83" target="_blank" rel="noopener noreferrer">
    <StyledIconButton bgcolor="#0077B5">
      <Tooltip title="LinkedIn" arrow>
        <LinkedInIcon />
      </Tooltip>
    </StyledIconButton>
  </a>

  <a href="https://www.instagram.com/somnathmore83" target="_blank" rel="noopener noreferrer">
    <StyledIconButton bgcolor="#E1306C">
      <Tooltip title="Instagram">
        <InstagramIcon />
      </Tooltip>
    </StyledIconButton>
  </a>

  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <StyledIconButton bgcolor="#3b5998">
      <Tooltip title="Facebook" arrow>
        <FacebookIcon />
      </Tooltip>
    </StyledIconButton>
  </a>

  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <StyledIconButton bgcolor="#1DA1F2">
      <Tooltip title="Twitter" arrow>
        <TwitterIcon />
      </Tooltip>
    </StyledIconButton>
  </a>

  <a href="https://www.github.com/somnath-more" target="_blank" rel="noopener noreferrer">
    <StyledIconButton bgcolor="#333333">
      <Tooltip title="Github" arrow>
        <GitHubIcon />
        </Tooltip>
        </StyledIconButton>
    </a>
   </Box>
    </HomeBox>
  );
};

export default Home;
