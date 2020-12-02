import React, { useState, useEffect } from "react"
import Helmet from "react-helmet"
import Layout from "../components/Layout"
import { Route, Link } from "react-router-dom"

const Projects = () => {
  const [ projects, setProjects ] = useState([])

  useEffect(() => {
    fetch("/api/v1/projects") 
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])

  return(
    <>
      <Helmet>
        <title>Projects | Consent</title>
      </Helmet>
      <header className="ct-datapanel__header">
        <h1>Projects</h1>
        <Link className="ct-button ct-button--new" to="/projects/new">New project</Link>
      </header>
      
      <ul className="ct-project-list">
        {projects.map(project => 
          <li className="ct-project-list__item" key={project.id}>
            <Link className="ct-project-list__link" to={`/projects/${project.id}`}>
            <h2>{project.name}</h2>
            </Link>
            <p>Example project meta here</p>
          </li>
        )}
      </ul>

      <footer className="ct-datapanel__footer">
        <p>Version 0.1 — Thank you for using Consent</p>
      </footer>

      <Route path="/projects/new" exact>
        ghrjls
      </Route>
    </>
  )
}

export default Projects