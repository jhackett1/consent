import React, { useEffect, useState } from "react"
// import ProtectedRoute from "../components/ProtectedRoute"

const Index = () => {
  const [user, setUser] = useState(false)

  useEffect(() => {
    fetch("/api/auth/me")
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])

  return(
    <>
      <h1>Hello world</h1>
      <pre><code>{JSON.stringify(user)}</code></pre>
    </>

  )
}
export default Index