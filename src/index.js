import React from "react"
import ReactDOM from "react-dom"
import { AuthProvider } from "./contexts/authContext"
import { ToastProvider } from "./contexts/toastContext"
import App from "./App"

ReactDOM.render(
  <React.StrictMode>
      <AuthProvider>
        <ToastProvider>
          <App/>
        </ToastProvider>
      </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
)