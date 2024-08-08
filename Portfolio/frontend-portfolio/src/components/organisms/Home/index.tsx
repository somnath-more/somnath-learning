import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import React from "react";
const HomeBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "auto",
  width: "100vw",
  backgroundColor: "lightgray",
});
const Home = () => {
  return (
    <HomeBox>
      <h1>Home Page</h1>
      <p>This is the Home page</p>
    </HomeBox>
  );
};

export default Home;
