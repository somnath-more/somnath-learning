import React from "react";
import HomeTemplate from "../../templates/HomeTemplate";
import NavBar from "../../organisms/NavBar";

import Notes from "../../organisms/Notes";

const NotesPage = () => {
  return (
    <>
      <HomeTemplate NavBar={<NavBar />} MainComponent={<Notes />} />
    </>
  );
};

export default NotesPage;
