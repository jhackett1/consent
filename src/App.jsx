import React from "react"
import { 
  BrowserRouter as Router, 
  Route, 
  Link 
} from "react-router-dom"

import Index from "./pages/Index"
import Login from "./pages/Login"

import "./styles/index.scss"

const App = () => 
  <Router>

    <Route path="/" exact>
      <Index/>
    </Route>
    <Route path="/login">
      <Login/>
    </Route>

  </Router>

export default App