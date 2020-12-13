import React from "react"
import { Link } from "react-router-dom"

const DataChunk = ({
    title
}) => 
    <section className="ct-data-chunk">
        <header className="ct-data-chunk__header">
            <h2 className="ct-data-chunk__title">{title} <span className="ct-data-chunk__count">(4)</span></h2>
            <Link to="#" className="ct-link ct-data-chunk__quick-link">See all</Link>
        </header>

        <table className="ct-table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Created</th>
                <th className="ct-visually-hidden">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Avery Trufelman</td>
                <td>16.10.2020</td>
                <td>
                <Link className="ct-link" to="#">Edit</Link>
                <Link className="ct-link" to="#">Remove</Link>
                </td>
            </tr>
            <tr>
                <td>Sean Real</td>
                <td>16.10.2020</td>
                <td>
                <Link className="ct-link" to="#">Edit</Link>
                <Link className="ct-link" to="#">Remove</Link>
                </td>
            </tr>
            <tr>
                <td>Roman Mars</td>
                <td>16.10.2020</td>
                <td>
                <Link className="ct-link" to="#">Edit</Link>
                <Link className="ct-link" to="#">Remove</Link>
                </td>
            </tr>
            </tbody>
        </table>
    </section>

export default DataChunk