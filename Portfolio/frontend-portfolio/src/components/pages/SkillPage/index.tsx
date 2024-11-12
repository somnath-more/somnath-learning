import React from "react";
import HomeTemplate from "../../templates/HomeTemplate";
import NavBar from "../../organisms/NavBar";
import Skills from "../../organisms/Skills";

const SkillPage = () => {
  return (
    <>
      <HomeTemplate NavBar={<NavBar />} MainComponent={<Skills />} />
    </>
  );
};

export default SkillPage;
