import React from "react"
import {Formik, Form} from "formik"
import Field from "../components/Field"
import Dialog from "../components/Dialog"
import { useHistory } from "react-router-dom"
import { useToast } from "../contexts/toastContext"
import * as Yup from "yup"

const schema = Yup.object().shape({
    name: Yup.string()
        .required("Your project needs a name")
        .min(3, "Name needs to be at least three characters")
        .max(100, "Name can't be longer than 100 characters")
})

const NewProject = () => {
    const history = useHistory()
    const { popToast } = useToast()

    return(
        <Dialog open={true} title="Create a new project" onDismiss={() => history.push("/projects")}>
            <Formik
                initialValues={{ name: "" }}
                validationSchema={schema}
                onSubmit={async values => {
                    const res = await fetch("/api/v1/projects", {
                        method: "POST",
                        body: JSON.stringify(values),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    if(res.status === 201){
                        history.push("/projects")
                        popToast("Your project has been created")
                    }
                }}
            >
                {({touched, errors, isSubmitting}) => 
                    <Form>
                        <Field 
                            name="name" 
                            label="Name your project"
                            errors={touched.name ? errors.name : null}
                        />
                        <button className="ct-button" disabled={isSubmitting}>Create</button>
                    </Form>
                }
            </Formik>
        </Dialog>
    )
}

export default NewProject