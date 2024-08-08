import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
const OuterNavBar = styled(Box)({
  background: "pink",
  padding: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

const LeftGrid = styled(Grid)({
  display: "flex",
  alignItems: "center",
  alignContent: "right",
  gap: "10px",
});
const NavBar = () => {
  const navigate = useNavigate();

  return (
    <OuterNavBar>
      <Typography variant="h4">Somnath-More</Typography>
      <LeftGrid>
        <Typography variant="body1" onClick={() => navigate("/")}>
          Home
        </Typography>
        <Typography variant="body1" onClick={() => navigate("/about")}>
          About
        </Typography>
        <Typography variant="body1" onClick={() => navigate("/contact")}>
          Contact
        </Typography>
        <Typography variant="body1" onClick={() => navigate("/visitor")}>
          Visitor
        </Typography>
      </LeftGrid>
    </OuterNavBar>
  );
};

export default NavBar;
