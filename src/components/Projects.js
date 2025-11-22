import React from 'react';
import Slider from 'react-slick';
import './Projects.scss';
import project1 from '../assets/project/xxx.png';
import project2 from '../assets/project/i2.png';
import project3 from '../assets/project/i3.png';
import project4 from '../assets/project/i4.png';
import project5 from '../assets/project/i5.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const projects = [project1, project2, project3, project4, project5];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // **Tek görsel**
    slidesToScroll: 1,
    arrows: true,     // sağ-sol oklar
    autoplay: false,  // otomatik kaydırma kapalı
  };

  return (
    <section className="project-section py-5" id="images">
      <div className="container">
        <h2>Projects I have developed</h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div className="project-item" key={index}>
              <div className="project-info">
                <img src={project} alt={`Project ${index + 1}`} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
