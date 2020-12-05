import React, { useState } from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import Field from "../components/Field"
import { useAuth } from "../contexts/authContext"

const schema = Yup.object().shape({
    email: Yup.string()
        .required("Please enter your email address")
        .email('Please give a valid email address'),
    password: Yup.string()    
        .required("Please enter your password")
})

const LoginForm = ({
    setSubmitError
}) => {
    const { logIn } = useAuth()
    
    return(
        <Formik
            initialValues={{ 
                email: "", 
                password: "" 
            }}
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
                    <Field label="Email" name="email" type="email" errors= {touched.email ? errors.email : null}/>
                    <Field label="Password" name="password" type="password" errors= {touched.password ? errors.password : null}/>
                    <button className="ct-button">Log in</button>
                </Form>
            }
        </Formik>   
    )
}

export default LoginForm