import React from "react";
import HomeTemplate from "../../templates/HomeTemplate";
import NavBar from "../../organisms/NavBar";
import Visitor from "../../organisms/Visitor";

const VisitorPage = () => {
  return (
    <>
      <HomeTemplate NavBar={<NavBar />} MainComponent={<Visitor />} />
    </>
  );
};

export default VisitorPage;
