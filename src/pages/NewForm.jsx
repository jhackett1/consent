import React, { useState } from "react"
import { Formik, Form } from "formik"
import Field from "../components/Field"
import SelectField from "../components/SelectField"
import Dialog from "../components/Dialog"
import { useHistory, useParams } from "react-router-dom"
import { useToast } from "../contexts/toastContext"
import * as Yup from "yup"
import useSWR, { mutate } from "swr"

const schema = Yup.object().shape({
    name: Yup.string()
        .required("Your form needs a name")
        .min(3, "Name needs to be at least three characters")
        .max(100, "Name can't be longer than 100 characters"),
    projectId: Yup.number()
        .required("Your form needs to belong to a project")
})

const NewForm = () => {
    
    const history = useHistory()
    const { teamId } = useParams()
    const { popToast } = useToast()
    const { data: projects, error } = useSWR(`/api/v1/team/${teamId}/projects`)
    const { data: permissions, error } = useSWR(`/api/v1/team/${teamId}/permissions`)
    const [ submitError, setSubmitError ] = useState(false)

    if(data) return(
        <Dialog 
            open={true} 
            title="Create a new form" 
            onDismiss={() => history.push(`/team/${teamId}/forms`)}
        >
            <Formik
                initialValues={{
                    name: "",
                    projectId: data[0].id
                }}
                validationSchema={schema}
                onSubmit={async values => {
                    const res = await fetch(`/api/v1/team/${teamId}/forms`, {
                        method: "POST",
                        body: JSON.stringify(values),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    const data = await res.json()
                    if(!data.error){
                        history.push(`/team/${teamId}/forms`)
                        mutate(`/api/v1/team/${teamId}/forms`)
                        popToast("Your form has been created")
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
                        <SelectField 
                            name="projectId" 
                            label="Project"
                            options={projects.map(project => ({
                                label: project.name,
                                value: project.id
                            }))}
                            errors={touched.projectId ? errors.projectId : null}
                        />
                        <button className="ct-button" disabled={isSubmitting}>Save</button>
                    </Form>
                }
            </Formik>
        </Dialog>
    )

    return <p>Loading...</p>
}

export default NewForm