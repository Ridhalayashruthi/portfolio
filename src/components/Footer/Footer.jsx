import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">
          <h2>RL</h2>

          <p>
            Frontend Engineer specializing in building scalable,
            modern and accessible web applications.
          </p>
        </div>

        <div className="footer-links">

          <a href="#about">About</a>
          <a href="#projects">Featured Work</a>
          <a href="#experience">Professional Journey</a>
          <a href="#skills">Technical Expertise</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-socials">

          <a
            href="https://github.com/Ridhalayashruthi"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ridhalayasruthi-lakshmanan/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:shruthilakshmanan21@gmail.com">
            <FiMail />
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Ridhalayasruthi Lakshmanan.
          Designed & Developed with React.
        </p>

        <a href="#home" className="back-top">
          <FiArrowUp />
        </a>

      </div>

    </footer>
  );
};

export default Footer;