import React from "react";
import './Resume.scss';
const experiences = [
  {
    year: "2024",
    company: "Alp Havacılık",
    role: "It Intern",
    duration: "08/2024 – 09/2024",
    details: [
      "I developed a Full Stack Task Management System using React for the front end and Node.js with Express.js for the back end.",
      "I designed an OCR program for reading serial numbers to use in the factory"
    ]
  },
  {
    year: "2023",
    company: "Biorobotec Bionic Robot Teknolojileri A.Ş.",
    role: "Software Engineer Intern",
    duration: "06/2023 – 10/2023",
    details: [
      "I was part of the BioRobotec bionic robot project which was a finalist in the 2023 Teknofest Entrepreneurship Competition. In this project, I worked on image processing, artificial intelligence, modeling and Arduino, further enhancing my skills."
    ]
  }
];

const educations = [
  {
    year: "2026",
    school: "Bursa Technical University",
    degree: "Master's Degree",
    department: "AI and Machine Learning",
    duration: "2026-"
  },
  {
    year: "2020",
    school: "Balıkesir University",
    degree: "Bachelor's Degree",
    department: "Computer Engineering",
    duration: "2020-2024"
  },
  {
    year: "2016",
    school: "Özlüce Anatolian HighSchool",
    degree: "",
    department: "",
    duration: "2016-2020"
  }
];

const Resume = () => {
  return (
    <section
      className="resume py-5 d-lg-flex justify-content-center align-items-center"
      id="resume"
    >
      <div className="container">
        <div className="row">
          {/* Experiences */}
          <div className="col-lg-6 col-12">
            <h2 className="mb-4">Experiences</h2>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div className="timeline-wrapper" key={index}>
                  <div className="timeline-yr">
                    <span>{exp.year}</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>{exp.company}</span>
                      {exp.role && <small>{exp.role}</small>}
                    </h3>
                    <p>{exp.duration}</p>
                    {exp.details.map((detail, i) => (
                    <p className="detail" key={i}>{detail}</p>
                  ))}


                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Educations */}
          <div className="col-lg-6 col-12">
            <h2 className="mb-4 mobile-mt-2">Educations</h2>
            <div className="timeline">
              {educations.map((edu, index) => (
                <div className="timeline-wrapper" key={index}>
                  <div className="timeline-yr">
                    <span>{edu.year}</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>{edu.school}</span>
                      {edu.degree && <small>{edu.degree}</small>}
                    </h3>
                    {edu.department && <p>{edu.department}</p>}
                    <p>{edu.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;