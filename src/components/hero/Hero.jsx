import React from "react";
import "./Hero.css";
import { cvLink } from "../../Data/data";

const Hero = () => {
  return (
    <div>
      <section className="hero-container">
        <div className="hero-text-container">
          <h1>
            Hi, I'm <span className="highlight">Arman Khan</span>
          </h1>
          <h3>Frontend Developer</h3>
          <p>I craft responsive websites where technology meets creativity</p>
          {/* <p>
            Bringing creativity to life through responsive and engaging frontend
            experiences.
          </p> */}
          <div className="hero-btn-container">
            {/* <a href="#contact" className="contact-btn">
              Contact Me
            </a> */}
            <a href={cvLink} className="cv-btn" download>
              Download CV
            </a>
          </div>
        </div>
        <div className="hero-card-container">
          <pre className="code-snippet">
            <code>
              <span className="keyword">const</span>{" "}
              <span className="role">developer</span> = {"{"}
              <br />
              &nbsp;&nbsp;<span className="property">name</span>:{" "}
              <span className="string">'Arman Khan'</span>,<br />
              &nbsp;&nbsp;<span className="property">role</span>:{" "}
              <span className="string">'Frontend Developer'</span>,<br />
              &nbsp;&nbsp;<span className="property">skills</span>: [
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">'HTML'</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">'CSS'</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="string">'JavaScript'</span>
              ,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">'React JS'</span>
              ,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="string">'Tailwind CSS'</span>
              <br />
              &nbsp;&nbsp;],
              <br />
              &nbsp;&nbsp;<span className="property">isAvailable</span>:{" "}
              <span className="boolean">true</span>
              <br />
              {"}"};
            </code>
          </pre>
        </div>
      </section>
    </div>
  );
};

export default Hero;
