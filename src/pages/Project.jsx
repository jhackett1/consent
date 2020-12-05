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
                <Link className="ct-button ct-button--new" to="/projects/new">Invite participants</Link>
                <Link className="ct-button ct-button--new" to="/projects/new">New form</Link>
            </div>
        </>
    }>
        <DataChunk title="Participants"/>
        <DataChunk title="Forms"/>
    </DataPanel>
  )
}

export default Project