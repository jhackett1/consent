import React, { useState } from "react"
import { Link } from "react-router-dom"
import logo from "./logo.svg"
import { Helmet } from "react-helmet"
import SignInWithGoogle from "../components/SignInWithGoogle"
import LoginForm from "../components/LoginForm"

const Login = () => {
    const [submitError, setSubmitError] = useState(false)
    
    return(
        <div className="ct-login">
            <Helmet>
                <title>Sign in | Consent</title>
            </Helmet>
            <img src={logo} alt="Consent" className="ct-login__logo"/>
            <div className="ct-login__form-box">
                <h1 className="ct-login__title">Sign in</h1>
                {submitError && <p className="ct-error">{submitError}</p>}

                <LoginForm setSubmitError={setSubmitError}/>

                {process.env.REACT_APP_GOOGLE_CLIENT_ID &&
                    <SignInWithGoogle setSubmitError={setSubmitError} />
                }

                <p className="ct-login__actions">
                    <Link className="ct-link" to="/">Register</Link>
                    <Link className="ct-link" to="/">Forgotten password?</Link>
                </p> 
            </div>
        
            <p className="ct-login__notice">Version 0.1 — Thank you for using Consent</p>
        </div>
        
    )
}

export default Login