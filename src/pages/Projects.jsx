import React, { Suspense, useState, useEffect } from "react"
import Helmet from "react-helmet"
import { Route, Link, useLocation  } from "react-router-dom"
import { ProjectSkeleton } from "../components/Skeleton"

const NewProject = React.lazy(() => import('./NewProject'))

const Projects = () => {
  const [ projects, setProjects ] = useState([])
  const location = useLocation()

  useEffect(() => {
    fetch("/api/v1/projects") 
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [location])

  return(
    <>
      <Helmet>
        <title>Projects | Consent</title>
      </Helmet>
      <header className="ct-datapanel__header">
        <h1>Projects</h1>
        <Link className="ct-button ct-button--new" to="/projects/new">New project</Link>
      </header>
      
      <ul className="ct-project-list">
        {projects.length > 0 ?
          <>
            {projects.map(project => 
              <li className="ct-project-list__item" key={project.id}>
                <Link className="ct-project-list__link" to={`/projects/${project.id}`}>
                <h2>{project.name}</h2>
                </Link>
                <p>Example project meta here</p>
              </li>
            )}
          </>
          :
          <>
            <ProjectSkeleton/>
            <ProjectSkeleton/>
            <ProjectSkeleton/>
            <ProjectSkeleton/>
            <ProjectSkeleton/>
          </>
        }
      </ul>

      <footer className="ct-datapanel__footer">
        <p>Version 0.1 — Thank you for using Consent</p>
      </footer>

      <Suspense fallback={<></>}>
        <Route path="/projects/new" exact component={NewProject}/>
      </Suspense>
    </>
  )
}

export default Projects