import React from "react"
import Helmet from "react-helmet"
import { Link } from "react-router-dom"
import { useToast } from "../contexts/toastContext"


const Stat = () => 
  <div className="ct-stats__item">
    <dd className="ct-stats__value">
      XX
    </dd>
    <dt className="ct-stats__caption">
      Statistic caption
      <p className="ct-stats__subcaption">In the last 30 days</p>
    </dt>
  </div>

const Index = () => {

  const {popToast} = useToast()

  return(
    <>
      <Helmet>
        <title>Dashboard | Consent</title>
      </Helmet>

      <dl className="ct-stats">
        <Stat/>
        <Stat/>
        <Stat/>
      </dl>

      <section className="ct-data-chunk">
        <header className="ct-data-chunk__header">
          <h2 className="ct-data-chunk__title">Data chunk <span className="ct-data-chunk__count">(4)</span></h2>
          <Link to="#" className="ct-data-chunk__quick-link">See all</Link>
        </header>

        <table className="ct-data-chunk__table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Created</th>
              <th class="ct-visually-hidden">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Avery Trufelman</td>
              <td>16.10.2020</td>
              <td>
                <Link to="#">Edit</Link>
                <Link to="#">Remove</Link>
              </td>
            </tr>
            <tr>
              <td>Sean Real</td>
              <td>16.10.2020</td>
              <td>
                <Link to="#">Edit</Link>
                <Link to="#">Remove</Link>
              </td>
            </tr>
            <tr>
              <td>Roman Mars</td>
              <td>16.10.2020</td>
              <td>
                <Link to="#">Edit</Link>
                <Link to="#">Remove</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

    </>
  )
}


export default Index