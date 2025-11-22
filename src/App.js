import React from 'react';
import Navbar from './components/Navbarr';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Projects22 from './components/Projects2';
import Resume from './components/Resume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <Resume/>
      <Projects/>
      <Projects22/>
      <Footer/>
      
    </>
  );
}

export default App;
