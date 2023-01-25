import './BackgroundImgStyles.css'
import { Link } from 'react-router-dom'

const BackgroundImg = () => {
  return (
    <div className='background'>
      <div className='mask'>
        <img className='intro-img' src='images/background.jpg' alt="IntroImg" />
      </div>
      <div className='content'>
        <p>HI, I'M ALYSSA DEMARTINIS</p>
        <h1>Software Developer</h1>
        <div>
          <Link to='projects' className='btn'>Projects</Link>
          <Link to='contact' className='btn btn-light'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default BackgroundImg