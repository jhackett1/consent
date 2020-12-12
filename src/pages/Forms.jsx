import React from "react"
import Helmet from "react-helmet"
import { Link, useParams, Route } from "react-router-dom"
import DataPanel from "../components/DataPanel"
import useSWR from "swr"
import NewForm from "../components/NewForm"

const Row = ({
    id,
    name,
    created_at,
    project,
    teamId
}) => {
    const rawDate = new Date(created_at)
    const date = `${rawDate.getDate()}.${rawDate.getMonth()+1}.${rawDate.getFullYear()}`
    return(
        <tr>
            <td>{name}</td>
            <td><Link className="ct-link" to={`/team/${teamId}/project/${project.id}`}>{project.name}</Link></td>
            <td></td>
            <td>{date}</td>
            <td>
                <Link className="ct-link" to={`/team/${teamId}/form/${id}`}>Edit</Link>
                <Link className="ct-link" to="#">Preview</Link>
            </td>
        </tr>
    )
}

const Forms = () => {

    const { teamId } = useParams()
    const { data, error } = useSWR(`/api/v1/team/${teamId}/forms`)

    return(
        <DataPanel>
            <Helmet>
                <title>Forms | Consent</title>
            </Helmet>

            {data.length > 0 ?
                <table className="ct-data-chunk__table">
                    <thead>
                        <tr>
                            <th>Form</th>
                            <th>Project</th>
                            <th>Participants</th>
                            <th>Created</th>
                            <th className="ct-visually-hidden">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(form => 
                            <Row key={form.id} teamId={teamId} {...form}/>
                        )}
                    </tbody>
                </table>
                :
                <p className="ct-no-results">No forms to show yet</p>
            }

            <Route path={`/team/:teamId/forms/new`} exact component={NewForm}/>

        </DataPanel>
    )
}


export default Forms