import React from 'react';
import './App.css';
import ContactPage from './components/pages/Contact';
import HomePage from './components/pages/Home';
import VisitorPage from './components/pages/Visitor';
import { Route, Routes } from 'react-router';
import AboutPage from './components/pages/About';

function App() {
  return (

     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/home" element={<HomePage />} />
       <Route path="/contact" element={<ContactPage/>} />
       <Route path="/visitor" element={<VisitorPage/>} />
       <Route path="/about"   element={<AboutPage/>} />
  
     </Routes>
  );
}

export default App;
