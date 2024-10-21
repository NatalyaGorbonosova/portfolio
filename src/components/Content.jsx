import React from 'react'
import { projectData } from './projectData'
import ProjectItem from './ProjectItem'

const Content = () => {
  return (
    <main>
        {projectData.map(project => (
            <ProjectItem 
                id={project.id}
                title={project.title}
                images={project.images}
                description={project.description}
                stack={project.stack}
                link={project.link}
                linkGithub={project.linkGithub}
            />
        ))}
    </main>
  )
}

export default Content