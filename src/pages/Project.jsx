import React from "react"
import Helmet from "react-helmet"
import { Route, Link, useParams } from "react-router-dom"
import DataPanel from "../components/DataPanel"
import Chunk from "../components/Chunk"
import FormsTable from "../components/FormsTable"
import { TableSkeleton } from "../components/Skeleton"
import EditProject from "./EditProject"
import useSWR from "swr"

const Project = () => {
  const { teamId, id } = useParams()
  const { data: project, error } = useSWR(`/api/v1/team/${teamId}/projects/${id}`)

  return(
    <DataPanel header={
        <>
            <div className="ct-inline-editable">
              <h1>{project?.name}</h1>
              <Link to={`/team/${teamId}/project/${id}/edit`} className="ct-link">Edit?</Link>
            </div>

            <div className="ct-data-chunk__header-actions">
                <Link className="ct-button ct-button--new" to="#">Invite participants</Link>
                <Link className="ct-button ct-button--new" to="#">New form</Link>
            </div>
        </>
    }>
        {project && 
          <Helmet>
            <title>{project.name} | Consent</title>
          </Helmet>
        }


        <Chunk 
        title="Forms" 
        count={project?.forms.length}
        links={ project?.forms.length && 
          <Link to={`/team/${teamId}/forms?projectId=${project.id}`} className="ct-link ct-data-chunk__quick-link">See all</Link>
        }
        >
          {project ?
            project.forms.length > 0 ? 
              <FormsTable forms={project.forms} teamId={teamId}/>
              :
              <p className="ct-no-results">No forms in this project yet</p>
            :
            <TableSkeleton columns={[
              "Name",
              "Participants",
              "Created",
              ""
            ]}/>
          }
        </Chunk>

        <Chunk title="Participants">
        </Chunk>

        <Route path="/team/:teamId/project/:id/edit">
          <EditProject project={project}/>
        </Route>

        <Route path="/team/:teamId/project/:id/edit">
          <EditProject project={project}/>
        </Route>

    </DataPanel>
  )
}

export default Project