import React from "react"
import { Field as FormikField } from "formik"

const Field = ({
    label,
    name,
    errors
}) =>
    <div className="ct-field">
        <label htmlFor={name}>
            {label}
        </label>
        <FormikField 
            name={name} 
            id={name} 
            aria-describedby={errors && `${name}-error`}
        />
        {errors && 
            <p className="ct-field__error" id={`${name}-error`}>{errors}</p> 
        }
    </div>

export default Field