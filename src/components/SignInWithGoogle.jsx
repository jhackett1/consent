import React from "react"
import GoogleLogin from "react-google-login"
import { useAuth } from "../contexts/authContext"

const SignInWithGoogle = ({
    setSubmitError
}) => {
    const { googleLogIn } = useAuth()

    const handleResponse = async data => {
        try{
            await googleLogIn(data)
        } catch(err) {
            setSubmitError(err.message)
        }
    }
    
    return(
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Sign in with Google"
            className="ct-button ct-button--secondary"
            onSuccess={handleResponse}
            onFailure={handleResponse}
            cookiePolicy="single_host_origin"
        />
    )
}
export default SignInWithGoogle