import React from "react";
import "./Footer.css";
import { footer } from "../../Data/data";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-icons">
          {footer.map((icon) => (
            <a
              key={icon.id}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              {icon.icon}
            </a>
          ))}
        </div>
        <p>© 2024 Arman Khan. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
