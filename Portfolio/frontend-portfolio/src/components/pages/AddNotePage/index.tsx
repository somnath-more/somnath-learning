import React from "react";
import HomeTemplate from "../../templates/HomeTemplate";
import NavBar from "../../organisms/NavBar";

import AddNote from "../../organisms/AddNote";

const AddNotesPage = () => {
  return (
    <>
      <HomeTemplate NavBar={<NavBar />} MainComponent={<AddNote />} />
    </>
  );
};

export default AddNotesPage;
