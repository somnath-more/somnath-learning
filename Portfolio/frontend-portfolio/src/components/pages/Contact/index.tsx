import React from "react";
import HomeTemplate from "../../templates/HomeTemplate";
import NavBar from "../../organisms/NavBar";
import Contact from "../../organisms/Contact";

const ContactPage = () => {
  return (
    <>
      <HomeTemplate NavBar={<NavBar />} MainComponent={<Contact />} />
    </>
  );
};

export default ContactPage;
