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
    password: Yup.string(),
    new_password: Yup.string(),
    confirm_new_password: Yup.string()    
        .test('passwords-match', "Passwords don't match", function(value) {
            return this.parent.new_password === value;
          }),
})

const ProfileForm = ({
    setSubmitError
}) => {
    const { user } = useAuth()
    
    return(
        <Formik
            initialValues={{ 
                name: user.name,
                email: user.email, 
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
                    <div className="ct-field-group">
                        <Field label="Name" name="name" errors= {touched.name ? errors.name : null}/>
                        <Field label="Email address" name="email" type="email" errors= {touched.email ? errors.email : null}/>
                    </div>
                    <h2>Change your password</h2>
                    <div className="ct-field-group">
                        <Field label="Current password" name="password" type="password" errors= {touched.password ? errors.password : null}/>
                        <Field label="New password" name="new_password" type="password" errors= {touched.new_password ? errors.new_password : null}/>
                        <Field label="Re-enter new password" name="confirm_new_password" type="password" errors= {touched.confirm_new_password ? errors.confirm_new_password : null}/>
                    </div>
                    <button className="ct-button" disabled={isSubmitting}>Save changes</button>
                </Form>
            }
        </Formik>   
    )
}

export default ProfileForm