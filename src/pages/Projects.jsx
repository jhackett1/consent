import React, { Suspense, useState, useEffect } from "react"
import Helmet from "react-helmet"
import { Route, Link, useParams } from "react-router-dom"
import DataPanel from "../components/DataPanel"
import MiniSearch from "../components/MiniSearch"
import ProjectsList from "../components/ProjectsList"
import { ProjectSkeleton } from "../components/Skeleton"
import useSWR from "swr"
import NewProject from "./NewProject"

const Projects = () => {

  const { teamId } = useParams()
  const [search, setSearch] = useState("")
  const { data, error } = useSWR(`/api/v1/team/${teamId}/projects`)

  return(
    <DataPanel header={
      <>
        <h1 className="ct-visually-hidden">Projects</h1>
        <MiniSearch
          value={search}
          onChange={newValue => setSearch(newValue)}
        />
        <Link className="ct-button ct-button--new" to={`/team/${teamId}/projects/new`}>New project</Link>
      </>
    }>
      <Helmet>
        <title>Projects | Consent</title>
      </Helmet>

      <ProjectsList 
        projects={data} 
        search={search}
      />

      <Route path={`/team/:teamId/projects/new`} exact component={NewProject}/>

    </DataPanel>
  )
}

export default Projects