import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import SignInWithGoogle from "../components/SignInWithGoogle"
import LoginForm from "../components/LoginForm"
import MinimalLayout from "../components/MinimalLayout"

const Login = () => {
    const [submitError, setSubmitError] = useState(false)
    
    return(
        <MinimalLayout>
            <Helmet>
                <title>Sign in | Consent</title>
            </Helmet>
            <h1 className="ct-login__title">Sign in</h1>
            {submitError && <p className="ct-error">{submitError}</p>}

            <LoginForm setSubmitError={setSubmitError}/>

            {process.env.REACT_APP_GOOGLE_CLIENT_ID &&
                <SignInWithGoogle setSubmitError={setSubmitError} />
            }

            <p className="ct-login__actions">
                <Link className="ct-link" to="register">Register</Link>
                <Link className="ct-link" to="/">Forgotten password?</Link>
            </p> 
        </MinimalLayout>
    )
}

export default Login