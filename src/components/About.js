import React from "react";
import "../styles/About.css";
import profileImg from "../assests/client.png"; // Adjust path if needed (e.g., architect's photo)

import "font-awesome/css/font-awesome.min.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading">
        <i className="fas fa-drafting-compass"></i> About <span>Me</span>
      </h2>

      <div className="container">
        <div className="about-content">
          <div className="text-content">
            <h3>Who I Am</h3>
             <div className="image-box">
              <img src={profileImg} alt="Architect Profile" draggable="false" />
            </div>
            <p>
              I am a dedicated architect with a passion for creating sustainable, innovative spaces that blend functionality with aesthetic beauty. With years of experience in residential and commercial design, I specialize in transforming visions into tangible structures that inspire and endure.
            </p>

            <div className="what-i-do">
              <h4>What I Do</h4>
              <div className="skills-grid">
                <div className="skill-item">
                  <i className="fas fa-home"></i>
                  <h5>Residential Design</h5>
                  <p>Designing personalized homes that reflect client lifestyles, incorporating modern trends and sustainable materials.</p>
                </div>
                <div className="skill-item">
                  <i className="fas fa-building"></i>
                  <h5>Commercial Architecture</h5>
                  <p>Creating functional and visually striking commercial spaces, from offices to retail, optimized for efficiency and appeal.</p>
                </div>
                <div className="skill-item">
                  <i className="fas fa-cube"></i>
                  <h5>3D Modeling & Visualization</h5>
                  <p>Using advanced software to provide detailed 3D models and renderings for accurate project planning and client presentations.</p>
                </div>
                <div className="skill-item">
                  <i className="fas fa-leaf"></i>
                  <h5>Sustainable Design</h5>
                  <p>Integrating eco-friendly practices, energy-efficient systems, and green materials to promote environmental responsibility.</p>
                </div>
              </div>
            </div>
              

              <div className="experience">
              <h4>My Experience</h4>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h5>Senior Architect</h5>
                    <span>Urban Designs Inc. - 2020 - Present</span>
                    <p>Led design teams on high-profile projects, achieving LEED certification for 80% of developments and improving client satisfaction.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h5>Project Architect</h5>
                    <span>Modern Spaces Ltd. - 2017 - 2020</span>
                    <p>Managed residential and commercial projects from concept to completion, collaborating with engineers and contractors.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h5>Junior Architect</h5>
                    <span>Heritage Builders - 2015 - 2017</span>
                    <p>Assisted in drafting plans and 3D models, gaining expertise in AutoCAD, Revit, and sustainable design principles.</p>
                  </div>
                </div>
              </div>
            </div>


           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;