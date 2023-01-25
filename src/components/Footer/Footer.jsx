import './FooterStyles.css'
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk } from 'react-icons/fa'

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
            <h4>
              <FaMailBulk size={20} style={{color: '#8ecca9', marginRight: '2rem'}} />
              alyssadee@outlook.com
            </h4>
          </div>
        </div>

        <div className='right'>
          <h4>About this page</h4>
          <p>This my website! I enjoy talking about new projects and challenges. Hit me up.</p>
          <div className='social'>
            <FaFacebook size={30} style={{color: '#8ecca9', marginRight: '1rem'}} />
            <FaGithub size={30} style={{color: '#8ecca9', marginRight: '1rem'}} />
            <FaLinkedin size={30} style={{color: '#8ecca9', marginRight: '1rem'}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer