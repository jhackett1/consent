import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import fetch from "isomorphic-unfetch"
import Field from "../components/Field"

const schema = Yup.object().shape({
    email: Yup.string()
        .required("Please enter you email address")
        .email('Please give a valid email address'),
    password: Yup.string()    
        .required("Please enter your password")
})

const Login = () => 
  <>
    <h1>Log in</h1>
    <Formik
        initialValues={{ email: "jaye.hackett@gmail.com", password: "my-password" }}
        validationSchema={schema}
        onSubmit={async values => {
            try{
                const res = await fetch("/api/auth/login", {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const data = await res.json()
            } catch(err) {
            }
        }}
    >
        {({errors, touched}) =>
            <Form>
                <Field label="Email" name="email" errors= {touched.email ? errors.email : null}/>
                <Field label="Password" name="password" errors= {touched.email ? errors.email : null}/>

                <button>Log in</button>
            </Form>
        }
    </Formik>
  </>

export default Login