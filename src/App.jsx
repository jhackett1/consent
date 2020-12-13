import React from "react"
import { 
  Route,
  Switch
} from "react-router-dom"
import { useAuth } from "./contexts/authContext"
import Index from "./pages/Index"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Projects from "./pages/Projects"
import Project from "./pages/Project"
import Forms from "./pages/Forms"
import Profile from "./pages/Profile"
import ChooseTeam from "./pages/ChooseTeam"
import Layout from "./components/Layout"
import Loader from "./components/Loader"

import "./styles/index.scss"

const App = () => {

  const { user, error } = useAuth()

  if(!user && !error) return <Loader/>

  if(!user.id) return (
    <Switch>
      <Route path="/register" exact component={Register}/>
      <Route path="/" component={Login}/>
    </Switch>
  )

  return (
    <>
      <Route path="/" exact component={ChooseTeam}/>
      <Route path="/team/:teamId/">
        <Layout>
          <Route path="/team/:teamId/" exact component={Index}/>
          <Route path="/team/:teamId/projects" component={Projects}/>
          <Route path="/team/:teamId/project/:id" component={Project}/>
          <Route path="/team/:teamId/forms" component={Forms}/>
          <Route path="/team/:teamId/profile" component={Profile}/>
        </Layout>
      </Route>
    </>
  )
}

export default App