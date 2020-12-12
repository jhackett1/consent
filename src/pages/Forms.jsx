import React from "react"
import Helmet from "react-helmet"
import { Link, useParams } from "react-router-dom"
import DataPanel from "../components/DataPanel"
import useSWR from "swr"

const Forms = () => {

    const { teamId } = useParams()
    const { data, error } = useSWR(`/api/v1/team/${teamId}/forms`)

    return(
        <DataPanel>
            <Helmet>
                <title>Forms | Consent</title>
            </Helmet>

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
                    {data && data.map(form => 
                        <tr key={form.id}>
                            <td>{form.name}</td>
                            <td><Link className="ct-link" to={`/team/${teamId}/project/${form.project.id}`}>{form.project.name}</Link></td>
                            <td>5 <em>(3 awaiting)</em></td>
                            <td>{form.created_at}</td>
                            <td>
                                <Link className="ct-link" to={`/team/${teamId}/form/${form.id}`}>Edit</Link>
                                <Link className="ct-link" to="#">Remove</Link>
                            </td>
                        </tr>
                    )}
            </tbody>
            </table>

        </DataPanel>
    )
}


export default Forms