import styled from "@emotion/styled";
import { IconButton, Box, Tooltip } from "@mui/material";
import React, { useState, useEffect } from "react";
import { SOCIAL_MEDIA_DATA } from "../../Constants";
import { useTheme } from "../../../contexts";

const HomeBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100vw",
  height: "90vh",
  color: "#61dafb",
  textAlign: "center",
  fontFamily: "'Roboto', sans-serif",
  padding: "20px",
  margin: 0,

});

const Heading = styled("h1")({
  fontSize: "3rem",
  margin: "0",
  fontWeight: "bold",
  animation: "fadeIn 2s ease-in-out",
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
});

const Text = styled("h2")({
  fontSize: "2rem",
  margin: "10px 0",
  fontWeight: "300",
  color: "grey",
  animation: "fadeIn 0.5s ease-in-out",
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
});

const StyledIconButton = styled(IconButton)(({ theme, bgcolor }: any) => ({
  color: "#fff",
  display: 'flex',
  backgroundColor: bgcolor,
  margin: "10px",
  "&:hover": {
    backgroundColor: bgcolor,
    opacity: 0.8,
  },
  transition: "all 0.3s ease-in-out",
}));

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const {theme}=useTheme();
  console.log(theme)
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
    <HomeBox className={theme === 'dark'? 'text-light bg-dark':'text-dark bg-light'}>
      <Heading>Welcome to My Portfolio</Heading>
      <Text>{texts[currentTextIndex]}</Text>
      <Box sx={{ display: "flex", gap: 2, mt: "30px" ,flexWrap: 'wrap'}}>
        {
          SOCIAL_MEDIA_DATA.map((data) => (
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              <StyledIconButton >
                <Tooltip title={data.name} arrow>
                <img src={data.icon} height={'24px'} width={'24px'} alt={data.name} />
                </Tooltip>
              </StyledIconButton>
            </a>
          ))
        }
      </Box>



    </HomeBox>
  );
};

export default Home;