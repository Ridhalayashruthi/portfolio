import "./Contact.css";
import {
  FiMail,
  FiDownload,
  FiMapPin,
} from "react-icons/fi";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="section-header">
        <span>LET'S CONNECT</span>

        <h2>Let's Build Something Great Together</h2>

        <p>
          Whether it's a frontend opportunity, collaboration, or simply a
          conversation about technology, I'd love to hear from you.
        </p>
      </div>

      <div className="contact-grid">

        <a
          href="mailto:YOUR_EMAIL@gmail.com"
          className="contact-card"
        >
          <FiMail className="contact-icon" />

          <div>
            <h3>Email</h3>
            <span>Let's start a conversation</span>
          </div>
        </a>

        <a
          href="YOUR_LINKEDIN_URL"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaLinkedin className="contact-icon" />

          <div>
            <h3>LinkedIn</h3>
            <span>Connect professionally</span>
          </div>
        </a>

        <a
          href="YOUR_GITHUB_URL"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <FaGithub className="contact-icon" />

          <div>
            <h3>GitHub</h3>
            <span>Explore my repositories</span>
          </div>
        </a>

        <a
          href="/Ridhalayasruthi.pdf"
          download
          className="contact-card"
        >
          <FiDownload className="contact-icon" />

          <div>
            <h3>Resume</h3>
            <span>Download PDF</span>
          </div>
        </a>

      </div>

      <div className="availability-card">
        <FiMapPin />

        <div>
          <h4>Chennai, India</h4>

          <p>
            Available for Immediate Joining • Open to Frontend Opportunities
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;