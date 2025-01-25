import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-content">
          {/* Logo Section */}
          <h1 className="navbar-logo">Arman Khan</h1>

          {/* Links Section */}
          <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-180}
                onClick={() => setMenuOpen(false)}
                activeClass="active-link"
                spy={true}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-110}
                onClick={() => setMenuOpen(false)}
                activeClass="active-link"
                spy={true}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                offset={-110}
                onClick={() => setMenuOpen(false)}
                activeClass="active-link"
                spy={true}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-110}
                onClick={() => setMenuOpen(false)}
                activeClass="active-link"
                spy={true}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-110}
                onClick={() => setMenuOpen(false)}
                activeClass="active-link"
                spy={true}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div className="navbar-hamburger" onClick={toggleMenu}>
            {menuOpen ? <RxCross2 size={24} /> : <IoMenu size={24} />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
