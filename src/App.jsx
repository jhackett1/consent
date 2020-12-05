import React from "react"
import { 
  BrowserRouter as Router, 
  Route
} from "react-router-dom"
import { useAuth } from "./contexts/authContext"
import Index from "./pages/Index"
import Login from "./pages/Login"
import Projects from "./pages/Projects"
import Project from "./pages/Project"
import Forms from "./pages/Forms"
import Layout from "./components/Layout"
import Loader from "./components/Loader"

import "./styles/index.scss"

const App = () => {

  const { user, error } = useAuth()

  if(!user && !error) return <Loader/>

  return (
    <Router>
      {user && user.id ? 
        <Layout>
          <Route path="/" exact component={Index}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/project/:id" exact component={Project}/>
          <Route path="/forms" exact component={Forms}/>
        </Layout>
        :
        <Login/>
      }
    </Router>
  )
}

export default App