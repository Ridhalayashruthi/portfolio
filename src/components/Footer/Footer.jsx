import ReactGA from '../../analytics';
import './Footer.css';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    window.history.replaceState(null, '', window.location.pathname);
  };

  return (
    <footer className='footer'>
      <div className='footer-top'>
        <div className='footer-brand'>
          <h2>RL</h2>

          <p>
            Frontend Engineer specializing in building scalable, modern and
            accessible web applications.
          </p>
        </div>

        <div className='footer-links'>
          <a href='#about'>About</a>
          <a href='#projects'>Featured Work</a>
          <a href='#experience'>Professional Journey</a>
          <a href='#skills'>Technical Expertise</a>
          <a href='#contact'>Contact</a>
        </div>

        <div className='footer-socials'>
          <a
            href='https://github.com/Ridhalayashruthi'
            target='_blank'
            rel='noreferrer'
            onClick={() => {
              ReactGA.event({
                category: 'Social',
                action: 'GitHub Click',
              });
            }}
          >
            <FaGithub />
          </a>

          <a
            href='https://www.linkedin.com/in/ridhalayasruthi-lakshmanan/'
            target='_blank'
            rel='noreferrer'
            onClick={() => {
              ReactGA.event({
                category: 'Social',
                action: 'LinkedIn Click',
              });
            }}
          >
            <FaLinkedin />
          </a>

          <a
            href='mailto:shruthilakshmanan21@gmail.com'
            onClick={() => {
              ReactGA.event({
                category: 'Contact',
                action: 'Lets Connect Click',
              });
            }}
          >
            <FiMail />
          </a>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>
          © {new Date().getFullYear()} Ridhalayasruthi Lakshmanan. Designed &
          Developed with React.
        </p>
        <button
          className='scroll-top'
          onClick={() => {
            scrollToTop();
            ReactGA.event({
              category: 'Home',
              action: 'Home Click',
            });
          }}
          aria-label='Back to top'
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
