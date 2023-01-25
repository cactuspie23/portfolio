import { FaGrinTongueSquint } from 'react-icons/fa'
import './BackgroundImg2Styles.css'

const BackgroundImg2 = (props) => {
  return (
    <div className='bg-img'>
      <div className='heading'>
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default BackgroundImg2