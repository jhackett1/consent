import React from "react"
import Helmet from "react-helmet"
import { Link } from "react-router-dom"
import DataPanel from "../components/DataPanel"

const Forms = () => {

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
                    <th class="ct-visually-hidden">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Usability testing</td>
                    <td><Link to="">Example project</Link></td>
                    <td>5 <em>(3 awaiting)</em></td>
                    <td>16.10.2020</td>
                    <td>
                        <Link to="#">Edit</Link>
                        <Link to="#">Remove</Link>
                    </td>
                </tr>
                <tr>
                    <td>Discovery</td>
                    <td><Link to="">Example project</Link></td>
                    <td>5 <em>(3 awaiting)</em></td>
                    <td>16.10.2020</td>
                    <td>
                        <Link to="#">Edit</Link>
                        <Link to="#">Remove</Link>
                    </td>
                </tr>
                <tr>
                    <td>Alpha workshop</td>
                    <td><Link to="">Example project</Link></td>
                    <td>5 <em>(3 awaiting)</em></td>
                    <td>16.10.2020</td>
                    <td>
                        <Link to="#">Edit</Link>
                        <Link to="#">Remove</Link>
                    </td>
                </tr>
        </tbody>
        </table>

    </DataPanel>
  )
}


export default Forms