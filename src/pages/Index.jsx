import React from "react"
import Helmet from "react-helmet"
import { Link } from "react-router-dom"
import DataPanel from "../components/DataPanel"
import DataChunk from "../components/DataChunk"

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

  return(
    <DataPanel>
      <Helmet>
        <title>Dashboard | Consent</title>
      </Helmet>

      <dl className="ct-stats">
        <Stat/>
        <Stat/>
        <Stat/>
      </dl>

      <DataChunk/>
    </DataPanel>
  )
}


export default Index