import "./About.css";

const About = () => {
  return (
    <section className="about section" id="about">

      <div className="section-header">
        <span>ABOUT ME</span>
        <h2>Building products that users enjoy using.</h2>
      </div>

      <div className="about-grid">

        <div className="about-content">

          <p>
            I'm a Frontend Engineer with 6+ years of experience developing
            enterprise-scale web applications using React.js, JavaScript,
            Redux and modern frontend technologies.
          </p>

          <p>
            I enjoy converting complex business requirements into clean,
            scalable and maintainable user interfaces that improve user
            experience and business efficiency.
          </p>

          <p>
            Throughout my career I've worked on large enterprise applications,
            collaborated with cross-functional teams and delivered features
            used by thousands of users.
          </p>

        </div>

        <div className="stats-grid">

          <div className="stat-card">
            <h3>6+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat-card">
            <h3>3</h3>
            <p>Enterprise Projects</p>
          </div>

          <div className="stat-card">
            <h3>20+</h3>
            <p>Major Features Delivered</p>
          </div>

          <div className="stat-card">
            <h3>100%</h3>
            <p>Passion for Frontend</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;