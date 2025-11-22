import React, { useState, useEffect } from 'react';
import cv from '../assets/cv.pdf';
import './Home.scss';

const roles = ["Computer Engineer", "Software Developer"];

const TypewriterText = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + currentRole[charIndex]);
        setCharIndex(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText('');
        setCharIndex(0);
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex]);

  return <span className="animated-item">{displayedText}</span>;
};

const Home = () => {
  return (
    <section className="home-section full-screen" id="home">
      <div className="container text-center">
        <h2 className="fade-in">Hi! my name is</h2>
        <h1 className="animated-text fade-in delay-1s">
          <span className="mr-2">Zeynep Kargı.</span>
          <div className="animated-info">
            <TypewriterText />
          </div>
        </h1>
        <p className="intro-text">
        I am a software developer with two years of experience in web development and image processing. I’ve worked on various projects that enhanced my technical and problem-solving skills. I also develop iOS apps using Swift, expanding my expertise into mobile development. Passionate about technology, I continuously seek opportunities to learn, grow, and build impactful digital solutions.
      </p>


        <div className="custom-btn-group mt-4 fade-in delay-2s">
          <a href={cv} className="btn custom-btn custom-btn-bg" download="cv.pdf">
            <i className="uil uil-file-alt"></i> Download CV
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Home;
