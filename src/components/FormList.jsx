import React from "react"
import { Link } from "react-router-dom"

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
            <td>
                <Link className="ct-link" to={`/team/${teamId}/project/${project.id}`}>
                    {project.name}
                </Link>
            </td>
            <td></td>
            <td>{date}</td>
            <td>
                <Link className="ct-link" to={`/team/${teamId}/form/${id}`}>
                    Edit
                </Link>
                <Link className="ct-link" to="#">
                    Preview
                </Link>
            </td>
        </tr>
    )
}

const FormList = ({
    teamId,
    forms
}) => 
    <table className="ct-table">
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
            {forms.map(form => 
                <Row key={form.id} teamId={teamId} {...form}/>
            )}
        </tbody>
    </table>

export default FormList