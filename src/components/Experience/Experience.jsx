import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience section" id="experience">

      <div className="section-header">
        <span>CAREER JOURNEY</span>
        <h2>Delivering impactful frontend solutions across enterprise client engagements.</h2>
      </div>

      <div className="company-card">

        <div className="company-header">

          <div>
            <h3>Senior Software Engineer</h3>

            <h4>Altimetrik</h4>

            <p>Feb 2021 — Jan 2026</p>
          </div>

          <span className="experience-badge">
            4.3 Years
          </span>

        </div>

        <p className="company-description">
          Worked as a Frontend Engineer delivering enterprise web applications
          for global clients using React.js, JavaScript, Redux and modern UI
          frameworks. Collaborated with cross-functional teams to build scalable,
          responsive and high-performance applications.
        </p>

        <h5 className="client-title">
          Enterprise Client Projects
        </h5>

        <div className="client-grid">

          <div className="client-card">

            <div className="client-top">
              <h4>Samsung Electronics</h4>

              <span>2022 - 2024</span>
            </div>

            <p className="project-name">
              Customer Service Portal • Fulfilment Portal
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>Redux</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>Jenkins</span>
            </div>

            <details>

              <summary>View Responsibilities</summary>

              <ul>

                <li>Developed enterprise Customer Service and Fulfilment applications.</li>

                <li>Built reusable React components.</li>

                <li>Implemented AWS S3 file upload functionality.</li>

                <li>Collaborated with Agile teams.</li>

                <li>Improved frontend performance.</li>

              </ul>

            </details>

          </div>

          <div className="client-card">

            <div className="client-top">

              <h4>PayPal</h4>

              <span>2021 - 2022</span>

            </div>

            <p className="project-name">
              Leadership Dashboard • Customer Experience Dashboard
            </p>

            <div className="tech-stack">

              <span>React</span>

              <span>Redux</span>

              <span>Ant Design</span>

              <span>Material UI</span>

              <span>REST API</span>

            </div>

            <details>

              <summary>View Responsibilities</summary>

              <ul>

                <li>Refactored React components.</li>

                <li>Developed Leadership Dashboard.</li>

                <li>Developed Customer Experience Dashboard.</li>

                <li>Integrated REST APIs.</li>

                <li>Managed Redux state.</li>

                <li>Built responsive UI using Ant Design and Material UI.</li>

              </ul>

            </details>

          </div>

        </div>

      </div>

      <div className="company-card previous-company">

        <div className="company-header">

          <div>

            <h3>Frontend Developer</h3>

            <h4>SkiTech</h4>

            <p>Sep 2019 — Sep 2021</p>

          </div>

          <span className="experience-badge">
            2 Years
          </span>

        </div>

        <div className="tech-stack">
              <span>React</span>
              <span>Redux</span>
              <span>JavaScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
            </div>
        <p className="company-description">
          Developed responsive web applications, reusable UI components and
          business features using HTML, CSS, JavaScript and React while working
          closely with backend developers.
        </p>

      </div>

    </section>
  );
};

export default Experience;