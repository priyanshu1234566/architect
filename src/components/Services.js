import React from "react";
import "../styles/Services.css";
import {
  FaDraftingCompass,
  FaTools,
  FaCube,
  FaHome,
  FaBuilding,
  FaPencilRuler,
  FaDrawPolygon,
} from "react-icons/fa";

const services = [
  {
    icon: <FaDraftingCompass />,
    title: "Design & Planning",
    description:
      "We create modern, functional, and visually stunning designs tailored to your needs.",
  },
  {
    icon: <FaHome />,
    title: "Residential",
    description:
      "Beautiful and comfortable residential spaces designed for modern living.",
  },
  {
    icon: <FaBuilding />,
    title: "Commercial Building",
    description:
      "Innovative commercial designs that enhance productivity and brand identity.",
  },
  {
    icon: <FaPencilRuler />,
    title: "Interior Design",
    description:
      "Stylish and practical interior solutions that reflect your personality.",
  },
  {
    icon: <FaDrawPolygon />,
    title: "2D Model",
    description:
      "Accurate 2D layouts and technical drawings for precise planning.",
  },
  {
    icon: <FaCube />,
    title: "3D Model",
    description:
      "Realistic 3D visualizations to preview your project before execution.",
  },
  {
    icon: <FaTools />,
    title: "Renovation",
    description:
      "Transform your space with expert renovation solutions and premium finishes.",
  },
  {
    icon: <FaBuilding />,
    title: "Project Management",
    description:
      "End-to-end project coordination ensuring timelines, budgets, and quality standards are perfectly maintained.",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="services-title">
        Our <span>Services</span>
      </h2>

      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
