import './ProjectCardStyles.css'
import { NavLink } from 'react-router-dom'

const ProjectCard = (props) => {
  return (
    <div className='project-card'>
    <img src={props.image} alt='Create A Corgi' />    
    <h2 className='project-title'>{props.title}</h2> 
    <div className='project-details'>
      <p>{props.text}</p>
      <div className='project-btns'>
        <NavLink to={props.view} className='btn'>View</NavLink>
        <NavLink to={props.source} className='btn'>Source</NavLink>
        </div>
    </div>   
    </div>
  )
}

export default ProjectCard