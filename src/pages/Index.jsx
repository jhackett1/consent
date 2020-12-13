import React from "react"
import Helmet from "react-helmet"
import DataPanel from "../components/DataPanel"
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

    </DataPanel>
  )
}


export default Index