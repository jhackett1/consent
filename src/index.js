import React from "react"
import ReactDOM from "react-dom"
import { AuthProvider } from "./contexts/authContext"
import { ToastProvider } from "./contexts/toastContext"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"

ReactDOM.render(
  <React.StrictMode>
      <AuthProvider>
          <ToastProvider>
            <Router>
              <App/>
            </Router>
          </ToastProvider>
      </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
)