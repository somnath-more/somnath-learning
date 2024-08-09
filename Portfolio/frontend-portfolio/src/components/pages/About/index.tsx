import React from "react";
import HomeTemplate from "../../templates/HomeTemplate";
import NavBar from "../../organisms/NavBar";
import About from "../../organisms/About";
const AboutPage = () => {
  return (
    <>
      <HomeTemplate NavBar={<NavBar />} MainComponent={<About />} />
    </>
  );
};

export default AboutPage;
