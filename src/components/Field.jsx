import React from "react"
import { Field as FormikField } from "formik"

const Field = ({
    label,
    name,
    errors
}) =>
    <div className="ct-field">
        <label htmlFor={name}>{label}</label>
        <FormikField name={name} id={name}/>
        {errors && <p>{errors}</p> }
    </div>

export default Field