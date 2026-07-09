import { useState } from "react";
import "./FeaturedWork.css";
import featuredWork from "../../data/FeaturedWork";

const FeaturedWork = () => {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (id) => {
    setOpenCard(openCard === id ? null : id);
  };

  return (
    <section className="featured-work" id="projects">

      <div className="section-header">
        <span>FEATURED WORK</span>
        <h2>Enterprise products I've contributed to.</h2>
      </div>

      <div className="work-grid">

        {featuredWork.map((project) => (

          <article className="work-card" key={project.id}>

            <div className="browser-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="work-content">

              <p className="company">
                {project.company}
              </p>

              <h3>{project.title}</h3>

              <p className="description">
                {project.description}
              </p>

              <div className="tech-stack">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <button
                className="view-btn"
                onClick={() => toggleCard(project.id)}
              >
                {openCard === project.id
                  ? "Hide Contribution"
                  : "View Contribution"}
              </button>

              {openCard === project.id && (

                <div className="contribution">

                  <ul>
                    {project.contributions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                </div>

              )}

            </div>

          </article>

        ))}

      </div>

    </section>
  );
};

export default FeaturedWork;