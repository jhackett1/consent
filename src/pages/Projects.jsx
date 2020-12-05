import React, { Suspense, useState } from "react"
import Helmet from "react-helmet"
import { Route, Link } from "react-router-dom"
import DataPanel from "../components/DataPanel"
import MiniSearch from "../components/MiniSearch"
import ProjectsList from "../components/ProjectsList"
import { ProjectSkeleton } from "../components/Skeleton"
import useSWR from "swr"

const NewProject = React.lazy(() => import('./NewProject'))

const Projects = () => {

  const [search, setSearch] = useState("")
  const { data, error } = useSWR(`/api/v1/projects`)

  return(
    <DataPanel header={
      <>
        <h1 className="ct-visually-hidden">Projects</h1>
        <MiniSearch
          value={search}
          onChange={newValue => setSearch(newValue)}
        />
        <Link className="ct-button ct-button--new" to="/projects/new">New project</Link>
      </>
    }>
      <Helmet>
        <title>Projects | Consent</title>
      </Helmet>

      <ProjectsList 
        projects={data} 
        search={search}
      />

      <Suspense fallback={<></>}>
        <Route path="/projects/new" exact component={NewProject}/>
      </Suspense>
    </DataPanel>
  )
}

export default Projects