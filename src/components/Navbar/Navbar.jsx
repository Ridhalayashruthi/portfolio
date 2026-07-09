import "./Navbar.css";

const Navbar = () => {
  const navItems = [
    { label: "About", id: "about" },
    { label: "Featured Work", id: "projects" },
    { label: "Professional Journey", id: "experience" },
    { label: "Technical Expertise", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          RL
        </div>

        <nav>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;