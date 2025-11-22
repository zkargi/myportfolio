import React from "react";
import './Projects2.scss';
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Crime Detection With Image Processing",
    description:
      "The project detects criminals among the people registered in the system using image processing with OpenCV library.",
    iconClass: "flaticon-analysis",
    link: "#"
  },
  {
    title: "E-Commerce",
    description:
      "A user interface with React.js while providing a solid backend infrastructure with Node.js.",
    iconClass: "flaticon-flasks",
    link: "https://github.com/zkargi/e-commerce"
  },
  {
    title: "Bionic Robot",
    description:
      "We have developed a robot that can imitate the movements of the person in front of it. Techniques and Technology used: OpenCV for image processing, Arduino for controlling servo motors.",
    iconClass: "flaticon-ideas",
    link: "#"
  },
  {
    title: "Task Management System",
    description:
      "React for the frontend, Node.js and Express.js for the backend, and MongoDB as the database.",
    iconClass: "flaticon-innovation",
    link: "https://github.com/zkargi/TaskManagement"
  },
  {
    title: "Road Line Detection",
    description:
      "Technologies Used: Python for development, OpenCV for computer vision, NumPy for numerical computations.",
    iconClass: "flaticon-ux-design",
    link: "https://github.com/zkargi/RoadLineDetection"
  },
  {
    title: "OCR",
    description:
      "Automatically extract printed text, handwriting, and data from any document with intelligent document processing.",
    iconClass: "flaticon-idea",
    link: "https://github.com/zkargi/OCR"
  },
  {
    title: "Catch The Eric",
    description:
      "This is a simple whack-a-mole style iOS game where the user taps on a randomly appearing image 'Eric' within a time limit to increase their score. Tracks current score, countdown timer, and high score using UserDefaults.",
    iconClass: "flaticon-idea",
    link: "https://github.com/zkargi/CatchTheEric"
  },
  {
    title: "Art Book Project",
    description:
      "A simple Core Data-based painting list app where users can add, view, and delete paintings. Displays painting names in a table view and navigates to a detail screen. Data persisted locally using Core Data.",
    iconClass: "flaticon-idea",
    link: "https://github.com/zkargi/ArtBookProject"
  },
  {
    title: "Currency Converter",
    description:
      "A simple currency converter app that fetches real-time exchange rates from the Fixer API. Retrieves and displays rates for USD, CAD, CHF, GBP, JPY, and TRY using JSON parsing and URLSession.",
    iconClass: "flaticon-idea",
    link: "https://github.com/zkargi/CurrencyConverter"
  }
];

const Projects2 = () => {
  return (
    <section className="ftco-section" id="projects">
      <div className="container-fluid px-md-5">
        <div className="row justify-content-center py-5 mt-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h1 className="big big-2">Projects</h1>
          </div>
        </div>

        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 text-center d-flex ftco-animate" key={index}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="services-1 shadow"
              >
               <span className="icon">
                  <FaGithub size={32} />
                </span>

                <div className="desc">
                  <h3 className="mb-5">{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects2;
