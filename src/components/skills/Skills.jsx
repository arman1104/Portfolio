import React from "react";
import "./Skills.css";
import { skills } from "../../Data/data";

const Skills = () => {
  return (
    <section className="skills-container">
      <h1>Skills</h1>
      <div className="skills-card-container">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
