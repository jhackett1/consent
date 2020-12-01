import React from "react"
import { 
  BrowserRouter as Router, 
  Route, 
  Link 
} from "react-router-dom"
import ProtectedRoutes from "./components/ProtectedRoutes"

import Index from "./pages/Index"
import Login from "./pages/Login"
import Projects from "./pages/Projects"

import "./styles/index.scss"

const App = () => 
  <Router>
    <ProtectedRoutes>
      <Route path="/" exact component={Index}/>
      <Route path="/projects" component={Projects}/>
    </ProtectedRoutes>
    <Route path="/login" component={Login}/>
  </Router>

export default App