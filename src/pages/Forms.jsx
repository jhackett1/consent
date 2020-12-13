import React from "react"
import Helmet from "react-helmet"
import { Link, useParams, Route } from "react-router-dom"
import DataPanel from "../components/DataPanel"
import useSWR from "swr"
import NewForm from "./NewForm"
import FormList from "../components/FormList"
import { TableSkeleton } from "../components/Skeleton"

const Forms = () => {
    const { teamId } = useParams()
    const { data, error } = useSWR(`/api/v1/team/${teamId}/forms`)

    return(
        <DataPanel header={
            <>
              <h1 className="ct-visually-hidden">Forms</h1>
              <Link className="ct-button ct-button--new" to={`/team/${teamId}/forms/new`}>New form</Link>
            </>
          }>
            <Helmet>
                <title>Forms | Consent</title>
            </Helmet>
            {data ?
                data.length > 0 ?
                    <FormList forms={data} teamId={teamId}/>
                    :
                    <p className="ct-no-results">No forms have been created yet</p>
                :
                <TableSkeleton columns={[
                    "Form",
                    "Project",
                    "Participants",
                    "Created",
                    ""
                ]}/>
            }
            <Route path={`/team/:teamId/forms/new`} exact component={NewForm}/>
        </DataPanel>
    )
}


export default Forms