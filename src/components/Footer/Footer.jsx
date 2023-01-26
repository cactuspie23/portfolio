import './FooterStyles.css'
import { FaGithub, FaHome, FaLinkedin, FaMailBulk } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{color: '#8ecca9', marginRight: '2rem'}} />
            <div>
              <p>Tampa, FL</p>
            </div>
          </div>
          <div className='email'>
            <a href='mailto:alyssadee@outlook.com'>
              <h4>
                <FaMailBulk size={20} style={{color: '#8ecca9', marginRight: '2rem'}} />
                alyssadee@outlook.com
              </h4>
            </a>
          </div>
        </div>

        <div className='right'>
          <h4>About this page</h4>
          <p>This my website! I enjoy talking about new projects and challenges. Hit me up.</p>
          <div className='social'>
            <a href='https://github.com/cactuspie23' rel='noreferrer' target='_blank'>
              <FaGithub size={30} style={{color: '#8ecca9', marginRight: '1rem'}} />
            </a>
            <a href='https://www.linkedin.com/in/alyssa-demartinis/' rel='noreferrer' target='_blank'>
              <FaLinkedin size={30} style={{color: '#8ecca9', marginRight: '1rem'}} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer