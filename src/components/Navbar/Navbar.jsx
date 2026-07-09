import './Navbar.css';
import ReactGA from '../../analytics';

const Navbar = () => {
  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Featured Work', id: 'projects' },
    { label: 'Professional Journey', id: 'experience' },
    { label: 'Technical Expertise', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) return;
    if(section === "home") {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    window.scrollTo({
      top: section.offsetTop - 80,
      behavior: 'smooth',
    });

    window.history.replaceState(null, '', window.location.pathname);
  };

  return (
    <header className='navbar'>
      <div className='navbar-container'>
        <div className='logo'>
          <div
            className='logo'
            onClick={() => {
              scrollToSection("home");

              ReactGA.event({
                category: 'Home',
                action: 'Logo Click',
              });
            }}
          >
            RL
          </div>
        </div>

        <nav>
          <ul className='nav-links'>
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);

                  ReactGA.event({
                    category: 'Navigation',
                    action: `${item.label} Click`,
                  });
                }}
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
