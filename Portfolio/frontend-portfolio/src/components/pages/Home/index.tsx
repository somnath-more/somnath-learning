import React from "react";
import HomeTemplate from "../../templates/HomeTemplate";
import NavBar from "../../organisms/NavBar";
import Home from "../../organisms/Home";
const HomePage = () => {
  return (
    <>
      <HomeTemplate NavBar={<NavBar />} MainComponent={<Home />} />
    </>
  );
};

export default HomePage;
