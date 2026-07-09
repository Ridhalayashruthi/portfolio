import "./EngineeringToolkit.css";
import technologies from "../../data/technologies";

const TechnicalExpertise = () => {
  return (
    <section className="technical-section" id="skills">

      <div className="section-header">
        <span>ENGINEERING TOOLKIT</span>

        <h2>Technology Stack</h2>

        <p>
          Technologies I've used while building enterprise web applications,
          dashboards, and scalable frontend solutions.
        </p>
      </div>

      <div className="tech-grid">

        {technologies.map((category) => (

          <div className="tech-card" key={category.title}>

            <h3>{category.title}</h3>

            <p>{category.description}</p>

            <div className="skill-list">

              {category.skills.map((skill) => {

                const Icon = skill.icon;

                return (

                  <div className="skill-item" key={skill.name}>

                    <Icon className="skill-icon" />

                    <div>

                      <h4>{skill.name}</h4>

                      <span>{skill.info}</span>

                    </div>

                  </div>

                );
              })}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default TechnicalExpertise;