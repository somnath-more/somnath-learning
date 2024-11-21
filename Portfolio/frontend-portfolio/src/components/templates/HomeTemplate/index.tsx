import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import { useTheme } from "../../../contexts";

interface HomeTemplateProps {
  NavBar: React.ReactNode;
  MainComponent: React.ReactNode;
}
const HeaderBox = styled(Box)({
  display: "flex",
  widt: '100vw'
});
const MainBox = styled(Box)({
  display: "flex",
  height: "100%",
  width: "100%",
});
const HomeTemplate = ({ NavBar, MainComponent }: HomeTemplateProps) => {
  const {theme}=useTheme();
  return (
    <div>
      <HeaderBox>{NavBar ?? "NavBar"}</HeaderBox>
      <MainBox className={theme === 'dark'? 'text-light bg-dark':'text-dark bg-light'}>{MainComponent ?? "MainComponent"}</MainBox>
    </div>
  );
};

export default HomeTemplate;
