import React from "react"
import { Field as FormikField } from "formik"

const Field = ({
    label,
    name,
    errors
}) =>
    <div>
        <label>{label}</label>
        <FormikField name="password"/>
        {errors && <p>{errors}</p> }
    </div>

export default Field