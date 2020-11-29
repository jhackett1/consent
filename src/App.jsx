import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Index from "./pages/Index"
import Login from "./pages/Login"

const App = () => 
  <Router>

    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Log in</Link>
    </nav>

    <Route path="/">
      <Index/>
    </Route>
    <Route path="/login">
      <Login/>
    </Route>

  </Router>

export default App