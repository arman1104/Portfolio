import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-heading">
        <h1>About Me</h1>
      </div>

      <div className="about-para">
        <p className="para1">
          Hi, I'm <span className="name-highlight">Arman Khan</span>, a
          passionate <span className="role-highlight">Frontend Developer</span>{" "}
          with expertise in creating responsive and user-friendly web
          applications. My focus is on writing clean, efficient code and
          implementing modern design principles.
        </p>
        <p className="para2">
          I specialize in <span className="skills-highlight">React.js</span> and
          modern <span className="skills-highlight">JavaScript</span>, with a
          strong foundation in <span className="skills-highlight">HTML5</span>{" "}
          and <span className="skills-highlight">CSS3</span>. I enjoy using{" "}
          <span className="skills-highlight">Tailwind CSS</span> for creating
          beautiful, responsive designs that provide excellent user experiences
          across all devices.
        </p>
      </div>
    </div>
  );
};

export default About;
