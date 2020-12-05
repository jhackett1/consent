import React from "react"
import Helmet from "react-helmet"
import { Link } from "react-router-dom"
import DataPanel from "../components/DataPanel"
import DataChunk from "../components/DataChunk"
import Stat from "../components/Stat"

const Index = () => {

  return(
    <DataPanel>
      <Helmet>
        <title>Dashboard | Consent</title>
      </Helmet>

      <dl className="ct-stats">
        <Stat direction="negative"/>
        <Stat direction="positive"/>
        <Stat direction="positive"/>
      </dl>

      <DataChunk/>
    </DataPanel>
  )
}


export default Index