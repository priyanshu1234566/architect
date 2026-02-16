import React from "react";
import "../styles/Projects.css";

import project1 from "../assests/project1.webp";
import project2 from "../assests/project2.webp";
import project3 from "../assests/project3.webp";
import project4 from "../assests/project4.jpg";

const Projects = () => {
  const projects = [
    {
      image: project1,
      title: "Modern Website Design",
      location: "Delhi, India",
    },
    {
      image: project2,
      title: "E-commerce Platform",
      location: "Mumbai, India",
    },
    {
      image: project3,
      title: "Portfolio Landing Page",
      location: "Bangalore, India",
    },
    {
      image: project4,
      title: "Business Dashboard UI",
      location: "Chandigarh, India",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
