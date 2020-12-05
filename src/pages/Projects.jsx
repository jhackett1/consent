import React, { Suspense } from "react"
import Helmet from "react-helmet"
import { Route, Link } from "react-router-dom"
import DataPanel from "../components/DataPanel"
import { ProjectSkeleton } from "../components/Skeleton"
import useSWR from "swr"

const NewProject = React.lazy(() => import('./NewProject'))

const Projects = () => {

  const { data, error } = useSWR(`/api/v1/projects`)

  return(
    <DataPanel header={
      <>
        <h1>Projects</h1>
        <Link className="ct-button ct-button--new" to="/projects/new">New project</Link>
      </>
    }>
      <Helmet>
        <title>Projects | Consent</title>
      </Helmet>
      <ul className="ct-project-list">
        {data ?
          <>
            {data.map(project => 
              <li className="ct-project-list__item" key={project.id}>
                <Link className="ct-project-list__link" to={`/project/${project.id}`}>
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

      <Suspense fallback={<></>}>
        <Route path="/projects/new" exact component={NewProject}/>
      </Suspense>
      
    </DataPanel>
  )
}

export default Projects