import './Hero.css';
import { TypeAnimation } from 'react-type-animation';
import profile from '../../assets/images/profile.png';
import { FiDownload, FiMail, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className='hero' id='home'>
      <div className='hero-wrapper'>
        <div className='hero-container'>
          <div className='hero-right'>
            <div className='hero-image'>
              <img src={profile} alt='Ridhalayasruthi' />
            </div>
          </div>

          <div className='hero-left'>
            <div className='hero-badge'>
              Available for Frontend Opportunities
            </div>
            <h1>
              Ridhalayasruthi
              <br />
              Lakshmanan
            </h1>
            <TypeAnimation
              sequence={[
                'Senior Frontend Engineer',
                2500,

                'React.js • JavaScript • TypeScript',
                2500,

                'Building Enterprise Web Applications',
                2500,

                'Passionate About Clean UI & UX',
                2500,

                'Always Learning. Always Improving.',
                2500,
              ]}
              wrapper='span'
              speed={60}
              repeat={Infinity}
              cursor={false}
              className='typing-title'
            />

            <p>
              Building scalable, accessible and high-performance web
              applications using React, JavaScript and modern frontend
              architecture. Passionate about creating intuitive user experiences
              with clean, maintainable code.
            </p>

            <div className='hero-buttons'>
              <a
                href='/Ridhalayasruthi.pdf'
                download='Ridhalayasruthi_Lakshmanan_Resume.pdf'
                className='primary-btn'
              >
                <FiDownload />
                Download Resume
              </a>

              <a href='#contact' className='secondary-btn'>
                <FiSend size={18} />
                Let's Connect
              </a>
            </div>

            <div className='hero-socials'>
              <a
                href='https://github.com/Ridhalayashruthi'
                target='_blank'
                rel='noreferrer'
              >
                <FaGithub />
              </a>

              <a
                href='https://www.linkedin.com/in/ridhalayasruthi-lakshmanan/'
                target='_blank'
                rel='noreferrer'
              >
                <FaLinkedin />
              </a>

              <a href='mailto:shruthilakshmanan21@gmail.com'>
                <FiMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
