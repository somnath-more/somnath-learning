import React from "react";
import HomeTemplate from "../../templates/HomeTemplate";
import NavBar from "../../organisms/NavBar";
import Projects from "../../organisms/Projects";

const ProjectPage = () => {
  return (
    <>
      <HomeTemplate NavBar={<NavBar />} MainComponent={<Projects />} />
    </>
  );
};

export default ProjectPage;
