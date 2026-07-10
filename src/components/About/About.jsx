import "./About.css";

const stats = [
  {
    number: "6+",
    label: "Years Experience",
  },
  {
    number: "3",
    label: "Enterprise Projects",
  },
  {
    number: "20+",
    label: "Major Features Delivered",
  },
  {
    number: "100%",
    label: "Passion for Frontend",
  },
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-header">
        <span>ABOUT ME</span>

        <h2>Building intuitive digital experiences</h2>
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
          {stats.map((item) => (
            <div className="stat-card" key={item.label}>
              <h3>{item.number}</h3>

              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;