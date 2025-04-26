import React from 'react';
import './index.css' // or './main.css'

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePages from './components/home/HomePages';
import Home from './components/home/Home';
import About from './components/home/About';
import Skills from './components/home/Skills';
import Project from './components/home/Project';
import Contact from './components/home/Contact';




function App(){
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePages/>}/>
      <Route path="/Home" element={<HomePages/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Skills" element={<Skills/>}/>
      <Route path="/Project" element={<Project/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    
    <Footer/>
 

  
    
    
    
   
    </>

  );
}

export default App;