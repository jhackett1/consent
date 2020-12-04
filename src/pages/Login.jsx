import React, { useState } from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import Field from "../components/Field"
import { Link } from "react-router-dom"
import logo from "./logo.svg"
import { Helmet } from "react-helmet"
import { useAuth } from "../contexts/authContext"

const schema = Yup.object().shape({
    email: Yup.string()
        .required("Please enter your email address")
        .email('Please give a valid email address'),
    password: Yup.string()    
        .required("Please enter your password")
})

const Login = () => {
    const [submitError, setSubmitError] = useState(false)
    const { logIn } = useAuth()
    
    return(
        <div className="ct-login">
            <Helmet>
                <title>Sign in | Consent</title>
            </Helmet>
            <img src={logo} alt="Consent" className="ct-login__logo"/>
            <div className="ct-login__form-box">
                <h1 className="ct-login__title">Sign in</h1>
                <Formik
                    initialValues={{ email: "jaye.hackett@gmail.com", password: "my-password" }}
                    validationSchema={schema}
                    onSubmit={async values => {
                        try{
                            await logIn(values)
                        } catch(err){
                            setSubmitError(err.message)
                        }
                    }}
                >
                    {({errors, touched}) =>
                        <Form>
                            {submitError && <p className="ct-error">{submitError}</p>}

                            <Field label="Email" name="email" type="email" errors= {touched.email ? errors.email : null}/>
                            <Field label="Password" name="password" type="password" errors= {touched.password ? errors.password : null}/>
        
                            <button className="ct-button">Log in</button>
                        </Form>
                    }
                </Formik>   
                <p className="ct-login__actions">
                    <Link to="/">Register</Link>
                    <Link to="/">Forgotten password?</Link>
                </p> 
            </div>
        
            <p className="ct-login__notice">Version 0.1 — Thank you for using Consent</p>
        </div>
        
    )
}
export default Login