import './ProjectCardStyles.css'

const ProjectCard = (props) => {
  return (
    <div className='project-card'>
    <img src={props.image} alt='Create A Corgi' />    
    <h2 className='project-title'>{props.title}</h2> 
    <div className='project-details'>
      <p>{props.text}</p>
      <div className='project-btns'>
        <a href={props.view} rel='noreferrer' target='_blank' className='btn'>View</a>
        <a href={props.source} rel='noreferrer' target='_blank' className='btn'>Source</a>
        </div>
    </div>   
    </div>
  )
}

export default ProjectCard