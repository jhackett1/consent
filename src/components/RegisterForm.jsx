import React, { useState } from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import Field from "../components/Field"
import { useAuth } from "../contexts/authContext"

const schema = Yup.object().shape({
    name: Yup.string()
        .required("Please enter your name")
        .min(2)
        .max(100),
    email: Yup.string()
        .required("Please enter your email address")
        .email('Please give a valid email address'),
    password: Yup.string()    
        .required("Please enter a password"),
    confirm_password: Yup.string()    
        .required("Please re-enter your password")
        .test('passwords-match', "Passwords don't match", function(value) {
            return this.parent.password === value;
          }),
})

const RegisterForm = ({
    setSubmitError
}) => {
    // const { logIn } = useAuth()
    
    return(
        <Formik
            initialValues={{ 
                name: "",
                email: "", 
                password: "" ,
                confirm_password: ""
            }}
            validationSchema={schema}
            onSubmit={async values => {
                try{
                    // await logIn(values)
                } catch(err){
                    setSubmitError(err.message)
                }
            }}
        >
            {({errors, touched, isSubmitting}) =>
                <Form>
                    <Field label="Your name" name="name" type="email" errors= {touched.name ? errors.name : null}/>
                    <Field label="Your email address" name="email" type="email" errors= {touched.email ? errors.email : null}/>
                    <Field label="Choose a password" name="password" type="password" errors= {touched.password ? errors.password : null}/>
                    <Field label="Re-enter your password" name="confirm_password" type="password" errors= {touched.confirm_password ? errors.confirm_password : null}/>
                    <button className="ct-button" disabled={isSubmitting}>Sign up</button>
                </Form>
            }
        </Formik>   
    )
}

export default RegisterForm