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
  height: "91.5vh",
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
  animation: "slideDown 1s ease forwards", // Apply slide-down animation
  opacity: 0,
  "@keyframes slideDown": {
    "0%": { transform: "translateY(-100px)", opacity: 0 },
    "100%": { transform: "translateY(0)", opacity: 1 },
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

const StyledIconButton = styled(IconButton)(({ bgcolor }: any) => ({
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
  animation: "fadeIn 1s ease forwards",
  animationDelay: "1.5s",
  opacity: 0,
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
const SocialMediaData = [{
  name: "LinkedIn",
  icon: <LinkedInIcon />,
  link: "https://www.linkedin.com/in/somnathmore83",
  },{
    name: "Instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/somnathmore83",
  },{
    name: "Facebook",
    icon: <FacebookIcon />,
    link: "https://www.facebook.com/somnathmore83",
  },{
    name: "Twitter",
    icon: <TwitterIcon />,
    link: "https://www.twitter.com/somnathmore83",
  },{
    name: "Github",
    icon: <GitHubIcon />,
    link: "https://www.github.com/somnath-more",
  }

]
  return (
    <HomeBox>
      <Heading>Welcome to My Portfolio</Heading>
      <Text>{texts[currentTextIndex]}</Text>

      <Box sx={{ display: "flex", gap: 2, mt: "30px" }}>
       {
         SocialMediaData.map((data) => (
           <a href={data.link} target="_blank" rel="noopener noreferrer">
             <StyledIconButton bgcolor="#0077B5">
              <Tooltip title={data.name} arrow>
                {data.icon}
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
