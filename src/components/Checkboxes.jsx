import React from "react"
import { Field } from "formik"

const Checkboxes = ({
    legend,
    name,
    options,
    errors
}) =>
    <fieldset className="ct-checkboxes">
        <legend>{legend}</legend>
        {options.map((o, i) => 
            <div className="ct-checkboxes__field" key={i}>
                <Field 
                    type="checkbox" 
                    name={name}
                    value={o.value.toString()} 
                    id={`permission-${o.value}`}
                />
                <label htmlFor={`permission-${o.value}`}>
                    {o.label}
                </label>
            </div>
        )}
        {errors && 
            <p className="ct-field__error" id={`${name}-error`}>{errors}</p> 
        }
    </fieldset>

export default Checkboxes