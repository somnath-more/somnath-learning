import React from 'react';
import './App.css';
import ContactPage from './components/pages/Contact';
import HomePage from './components/pages/Home';
import { Route, Routes } from 'react-router';
import AboutPage from './components/pages/About';
import SkillPage from './components/pages/SkillPage';
import ProjectPage from './components/pages/ProjectPage';
import NotesPage from './components/pages/NotesPage';
import AddNotesPage from './components/pages/AddNotePage';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Carousel from './components/organisms/Home/SimpleSlider';
// import SimpleSlider from './components/organisms/Home/SimpleSlider';

function App() {
  return (

    //  <Routes>
    //    <Route path="/" element={<HomePage />} />
    //    <Route path="/home" element={<HomePage />} />
    //    <Route path="/contact" element={<ContactPage/>} />
    //    <Route path="/about"   element={<AboutPage/>} />
    //    <Route path="/skills"   element={<SkillPage/>} />
    //    <Route path="/projects" element={<ProjectPage/>} />
    //    <Route path="/notes" element={<NotesPage/>} />
    //    <Route path="/add-notes" element={<AddNotesPage/>} />
  
    //  </Routes>
    <Carousel/>

  );
}

export default App;
