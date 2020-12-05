import React from "react"
import { ProjectSkeleton } from "./Skeleton"
import { Link } from "react-router-dom"

const ProjectsList = ({
    projects,
    search
}) => {

  let filteredProjects = search ? projects.filter(project =>
    project.name
      .toLowerCase()
      .includes(search.toLowerCase())
  ) : projects


  console.log(projects, filteredProjects)

  if(!projects) return (
    <ul className="ct-project-list">
      <ProjectSkeleton/>
      <ProjectSkeleton/>
      <ProjectSkeleton/>
      <ProjectSkeleton/>
      <ProjectSkeleton/>
    </ul>
  )

  if(filteredProjects.length === 0) return <p className="ct-no-results">No results</p>

  return(
    <ul className="ct-project-list">
      {filteredProjects.map(project => 
        <li className="ct-project-list__item" key={project.id}>
          <Link className="ct-project-list__link" to={`/project/${project.id}`}>
          <h2>{project.name}</h2>
          </Link>
          <p>Example project meta here</p>
        </li>
      )}
    </ul>
  )
}

export default ProjectsList