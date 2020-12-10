import React from "react"
import Helmet from "react-helmet"
import { Route, Link, useParams } from "react-router-dom"
import DataPanel from "../components/DataPanel"

import DataChunk from "../components/DataChunk"
import EditProject from "./EditProject"
import useSWR from "swr"

const Project = () => {
  const { teamId, id } = useParams()
  const { data, error } = useSWR(`/api/v1/team/${teamId}/projects/${id}`)

  return(
    <DataPanel header={
        <>
            <div className="ct-inline-editable">
              <h1>{data?.name}</h1>
              <Link to={`/team/${teamId}/project/${id}/edit`} className="ct-link">Edit?</Link>
            </div>

            <div className="ct-data-chunk__header-actions">
                <Link className="ct-button ct-button--new" to="#">Invite participants</Link>
                <Link className="ct-button ct-button--new" to="#">New form</Link>
            </div>
        </>
    }>
        {data && 
          <Helmet>
            <title>{data?.name} | Consent</title>
          </Helmet>
        }
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

        <Route path="/team/:teamId/project/:id/edit">
          <EditProject project={data}/>
        </Route>

    </DataPanel>
  )
}

export default Project