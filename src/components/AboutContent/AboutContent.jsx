import './AboutContentStyles.css'
import { Link } from 'react-router-dom'

const AboutContent = () => {
  return (
    <div className='about'>
      <div className='left'>
        <h1>Who Am I?</h1>
        <p>I’m a full-stack software developer with a background in data entry and customer service. Through my data entry experience I've acquired exceptional attention to detail. My unique job history has taught me to be adaptable in any work environment. I possess a natural curiosity to understand how things work, which has compelled me to be self-motivated and autodidactic.</p>
        <Link to='/contact'>
          <button className='btn'>Contact</button>
        </Link>
      </div>
      <div className='right'>
        <div className='img-container'>
          <div className='img-stack top'>
            <img src='images/profile2.jpg' alt='profile' className='img'/>
          </div>
          <div className='img-stack bottom'>
            <img src='images/profile.jpg' alt='profile' className='img'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent