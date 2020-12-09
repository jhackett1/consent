import React from "react"
import { ProjectSkeleton } from "./Skeleton"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

const ProjectsList = ({
    projects,
    search
}) => {

  const { teamId } = useParams()

  if(search){
    projects = projects.filter(project =>
      project.name
        .toLowerCase()
        .includes(search.toLowerCase())
    )
  }

  if(!projects) return (
    <ul className="ct-project-list">
      <ProjectSkeleton/>
      <ProjectSkeleton/>
      <ProjectSkeleton/>
      <ProjectSkeleton/>
      <ProjectSkeleton/>
    </ul>
  )

  if(search && projects.length === 0) return <p className="ct-no-results">No results</p>

  if(projects.length > 0) return(
    <ul className="ct-project-list">
      {projects.length > 0 && projects.map(project => 
        <li className="ct-project-list__item" key={project.id}>
          <Link className="ct-project-list__link" to={`/team/${teamId}/project/${project.id}`}>
            <h2>{project.name}</h2>
          </Link>
          <p>Example project meta here</p>
        </li>
      )}
    </ul>
  )

  return <p className="ct-no-results">No projects to show yet</p>
}

export default ProjectsList