import React from 'react';
import aboutImage from '../assets/zeynep.jpeg'; // resmi React içinde import ettik
import './About.scss';

const About = () => {
  return (
        <section className="about-wrapper">
      <div className="about-card">
        <h1 className="big">About Me</h1>
        <p className="about-text">
          I am a software developer with two years of experience in web development and image processing. I’ve worked on various projects that enhanced my technical and problem-solving skills. I also develop iOS apps using Swift, expanding my expertise into mobile development. Passionate about technology, I continuously seek opportunities to learn, grow, and build impactful digital solutions.
        </p>

        <ul className="about-info">
          <li><span>Name:</span> Zeynep</li>
          <li><span>Email:</span> zeynepkargi@gmail.com</li>
          <li><span>Github:</span> <a href="https://github.com/zkargi">zkargi</a></li>
        </ul>
      </div>
    </section>

  );
};

export default About;
