import React, { useEffect, useState } from "react"
import Helmet from "react-helmet"
import { AuthConsumer } from "../contexts/authContext"
import { Link } from "react-router-dom"

const Index = ({
  user,
  logOut
}) => {

  return(
    <>
      <Helmet>
        <title>Dashboard | Consent</title>
      </Helmet>
      <h1>Dashboard</h1>

      {user && <pre><code>{JSON.stringify(user)}</code></pre>}

      <nav>
        {user ? 
          <>
            <Link to="/">Dashboard</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/forms">Forms</Link>
            <Link to="/participants">Participants</Link>
            <button onClick={logOut}>Log out</button>
          </>
          :
          <Link to="/login">Log in</Link>
        }
      </nav>

    </>

  )
}

export default props =>
  <AuthConsumer>
    {authContext => 
      <Index {...props} {...authContext}/>
    }
  </AuthConsumer>