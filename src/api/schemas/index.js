const Yup = require("yup")

module.exports = {
    LoginSchema: Yup.object().shape({
        email: Yup.string()
            .email()
            .required(),
        password: Yup.string()
            .required()
    }),
    
    RegistrationSchema: Yup.object().shape({
        email: Yup.string()
            .email()
            .required(),
        password: Yup.string()
            .required(),
        name: Yup.string()
            .min(2),
        teamName: Yup.string()
            .required()
            .min(2)
    }),

    ProjectSchema: Yup.object().shape({
        name: Yup.string()
            .required()
            .min(3)
    }),

    FormSchema: Yup.object().shape({
        name: Yup.string()
            .required()
            .min(3),
        projectId: Yup.number()
            .required()
    })
}