import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import React from "react";
const VisitorBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  backgroundColor: "lightgray",
});
const Visitor = () => {
  return (
    <VisitorBox>
      <h1>Visitor Page</h1>
      <p>This is the Visitor page</p>
    </VisitorBox>
  );
};

export default Visitor;
