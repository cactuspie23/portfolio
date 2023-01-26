import ProjectCard from './ProjectCard/ProjectCard'
import { projectData } from '../data/ProjectData.js'

const Works = () => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>Projects</h1>
      <div className='project-container'>
        {projectData.map((project, i) => 
          <ProjectCard 
          key={i}
          title={project.title}
          image={project.image}
          text={project.description}
          view={project.deploymentLink}
          source={project.repositoryLink}
          />
        )}
      </div>
    </div>
  )
}

export default Works