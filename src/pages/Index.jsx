import React from "react"
import Helmet from "react-helmet"
import { useToast } from "../contexts/toastContext"

const Index = () => {

  const {popToast} = useToast()

  return(
    <>
      <Helmet>
        <title>Dashboard | Consent</title>
      </Helmet>
      <h1>Dashboard</h1>
      <button onClick={() => popToast("Example toast")}>Pop toast</button>

    </>
  )
}


export default Index