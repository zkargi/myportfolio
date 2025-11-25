import React from 'react';
import Navbar from './components/Navbarr';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Projects22 from './components/Projects2';
import Resume from './components/Resume';

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
