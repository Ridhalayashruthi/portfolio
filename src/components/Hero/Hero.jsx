import "./Hero.css";
import profile from "../../assets/images/profile.png";
import {
  FiDownload,
  FiMail,
} from "react-icons/fi";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* LEFT */}

        <div className="hero-left">

          <div className="hero-badge">
            ● Available for Frontend Opportunities
          </div>

          <h1>
            Ridhalayasruthi
            <br />
            Lakshmanan
          </h1>

          <h2>Senior Frontend Engineer</h2>

          <p>
            Building scalable, accessible and high-performance web
            applications using React, JavaScript and modern frontend
            architecture. Passionate about creating intuitive user
            experiences with clean, maintainable code.
          </p>

          <div className="hero-buttons">

            <a
              href="/Ridhalayasruthi.pdf"
              download="Ridhalayasruthi_Lakshmanan_Resume.pdf"
              className="primary-btn"
            >
              <FiDownload />
              Download Resume
            </a>

            <a
              href="https://www.linkedin.com/in/ridhalayasruthi-lakshmanan/"
              className="secondary-btn"
            >
              <FiMail />
              Let's Connect
            </a>

          </div>

          <div className="tech-stack">

            <span>React.js</span>
            <span>Redux</span>
            <span>JavaScript</span>
            <span>Material UI</span>
            <span>Ant Design</span>
            <span>REST APIs</span>

          </div>

          <div className="hero-socials">

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

        {/* RIGHT */}

        <div className="hero-right">

          <div className="hero-image">

            <img
              src={profile}
              alt="Ridhalayasruthi"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;