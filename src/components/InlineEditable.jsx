import React, { useState, useRef } from "react"
import { Formik, Form, Field } from "formik"
import useClickOutside from "../hooks/useClickOutside"
import { useFormikContext } from 'formik';
import { useToast } from "../contexts/toastContext"
import { mutate } from "swr"

const InlineEditable = ({
    initialValue
}) => {

    const [editing, setEditing] = useState(false)
    const { popToast } = useToast()
    // const { submitForm } = useFormikContext()
    const ref = useRef()
    // useClickOutside(ref, e => submitForm())

    if(editing) return (
        <Formik
            initialValues={{
                name: initialValue
            }}
            onSubmit={async values => {
                const res = await fetch("/api/v1/projects/1", {
                    method: "PUT",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const data = await res.json()
                if(!data.error){
                    setEditing(false)
                    mutate(`/api/v1/projects/1`)
                    popToast("Project name updated")
                } else {
                    throw new Error(data.error)
                }
            }}
        >
            <Form ref={ref}>
                <Field name="name"/>
                <button>Submit</button>
            </Form>
        </Formik>
    )


    return(
        <div>
            <h1>{initialValue}</h1>
            <button onClick={() => setEditing(true)}>Edit this</button>
        </div>
    )
}

export default InlineEditable