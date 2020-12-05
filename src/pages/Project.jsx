import React, { Suspense, useState, useEffect } from "react"
import Helmet from "react-helmet"
import { Route, Link, useParams } from "react-router-dom"
import DataPanel from "../components/DataPanel"
import { ProjectSkeleton } from "../components/Skeleton"
import DataChunk from "../components/DataChunk"

const NewProject = React.lazy(() => import('./NewProject'))

const Project = () => {
  const [ project, setProject ] = useState({})
  const params = useParams()

  console.log(params)

  useEffect(() => {
    fetch(`/api/v1/projects/${params.id}`) 
      .then(res => res.json())
      .then(data => setProject(data))
  }, [params])

  return(
    <DataPanel header={
        <>
            <h1>{project.name}</h1>
            <div className="ct-data-chunk__header-actions">
                <Link className="ct-button ct-button--new" to="#">Invite participants</Link>
                <Link className="ct-button ct-button--new" to="#">New form</Link>
            </div>
        </>
    }>
        <Helmet>
          {project.name && <title>{project.name} | Consent</title>}
        </Helmet>
        <DataChunk title="Participants"/>
        <DataChunk title="Forms"/>


        <section className="ct-data-chunk">
          <header className="ct-data-chunk__header">
              <h2 className="ct-data-chunk__title">Manage project</h2>
          </header>
          <div>
            <Link to="#" className="ct-link ct-data-chunk__quick-link">Archive project</Link>
          </div>
        </section>


    </DataPanel>
  )
}

export default Project