import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import RegisterForm from "../components/RegisterForm"
import MinimalLayout from "../components/MinimalLayout"

const Login = () => {
    const [submitError, setSubmitError] = useState(false)
    
    return(
        <MinimalLayout>
            <Helmet>
                <title>Sign up | Consent</title>
            </Helmet>
            <h1 className="ct-login__title">Sign up</h1>
            {submitError && <p className="ct-error">{submitError}</p>}

            <RegisterForm setSubmitError={setSubmitError}/>

            <p className="ct-login__actions">
                <Link className="ct-link" to="/">Back to sign in</Link>
            </p> 
        </MinimalLayout>
        
    )
}

export default Login