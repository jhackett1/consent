import React from "react"
import { Field as FormikField } from "formik"

const SelectField = ({
    label,
    name,
    type,
    errors,
    options
}) =>
    <div className="ct-field">
        <label htmlFor={name}>
            {label}
        </label>
        <FormikField 
            as="select"
            name={name} 
            id={name} 
            type={type || "text"}
            aria-describedby={errors && `${name}-error`}
        >
            {options && options.map(option => 
                <option value={option.value} key={option.value}>
                    {option.label}
                </option>
            )}
        </FormikField>
        {errors && 
            <p className="ct-field__error" id={`${name}-error`}>{errors}</p> 
        }
    </div>

export default SelectField