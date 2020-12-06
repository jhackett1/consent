import React, { useState } from "react"
import { Formik, Form } from "formik"
import Field from "../components/Field"
import Dialog from "../components/Dialog"
import { useHistory } from "react-router-dom"
import { useToast } from "../contexts/toastContext"
import * as Yup from "yup"
import { mutate } from "swr"

const schema = Yup.object().shape({
    name: Yup.string()
        .required("Your project needs a name")
        .min(3, "Name needs to be at least three characters")
        .max(100, "Name can't be longer than 100 characters")
})

const EditProject = ({
    project
}) => {
    
    const history = useHistory()
    const { popToast } = useToast()
    const [ submitError, setSubmitError ] = useState(false)

    return(
        <Dialog 
            open={true} 
            title="Create a new project" 
            onDismiss={() => history.push(`/project/${project.id}`)}
        >
            <Formik
                initialValues={{
                    name: project.name
                }}
                validationSchema={schema}
                onSubmit={async values => {
                    const res = await fetch(`/api/v1/projects/${project.id}`, {
                        method: "PUT",
                        body: JSON.stringify(values),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    const data = await res.json()
                    if(!data.error){
                        history.push(`/project/${project.id}`)
                        mutate(`/api/v1/projects/${project.id}`)
                        popToast("Project name updated")
                    } else {
                        setSubmitError(data.error)
                    }
                }}
            >
                {({touched, errors, isSubmitting}) => 
                    <Form>
                        {submitError && <p className="ct-error">{submitError}</p>}
                        <Field 
                            name="name" 
                            label="Name"
                            errors={touched.name ? errors.name : null}
                        />
                        <button className="ct-button" disabled={isSubmitting}>Save</button>
                    </Form>
                }
            </Formik>
        </Dialog>
    )
}

export default EditProject