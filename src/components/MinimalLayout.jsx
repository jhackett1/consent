import React from "react"
import logo from "./logo.svg"

const MinimalLayout = ({
    children
}) => 
    <div className="ct-login">
        <img src={logo} alt="Consent" className="ct-login__logo"/>
        <div className="ct-login__form-box">
            {children}
        </div>
        <p className="ct-login__notice">Version 0.1 — Thank you for using Consent</p>
    </div>

export default MinimalLayout