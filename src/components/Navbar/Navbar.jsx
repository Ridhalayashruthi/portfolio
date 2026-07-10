import './Navbar.css';
import ReactGA from '../../analytics';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      // Always show navbar near the top
      if (currentScrollY < 50) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
  
      lastScrollY.current = currentScrollY;
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

    window.scrollTo({
      top: section.offsetTop - 80,
      behavior: 'smooth',
    });

    window.history.replaceState(null, '', window.location.pathname);
  };

  return (
    <header className={`navbar ${showNavbar ? 'show' : 'hide'}`}>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='logo'>RL</div>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setMenuOpen(false);

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

          <div className='menu-icon' onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
