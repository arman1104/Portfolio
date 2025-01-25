import React from "react";
import "./Projects.css";
import { projects } from "../../Data/data";

const Projects = () => {
  return (
    <div>
      <section className="projects-container">
        <h1>Projects</h1>
        <div className="projects-card-container">
          {projects.map((project) => (
            <div key={project.id} className="projects-card">
              <div className="projects-icon">{project.icon}</div>
              <div className="projects-name">{project.name}</div>
              <p className="projects-description">{project.description}</p>

              <div className="projects-btn-container">
                <a
                  href={project.project_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-Project-btn"
                >
                  View Project
                </a>
                <a
                  href={project.github_link}
                  className="github-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
