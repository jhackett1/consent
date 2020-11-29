import React from "react"
import ProtectedRoute from "../components/ProtectedRoute"

const Index = props => 
  <>
    <h1>Hello world</h1>
    <pre><code>{JSON.stringify(props.user)}</code></pre>
  </>

export default Index