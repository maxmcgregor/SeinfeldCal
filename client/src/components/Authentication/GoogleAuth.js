import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const GoogleAuth = () => {

    const handleGoogleLoginSuccess = async (credentialResponse) => {

        const token = credentialResponse.credential; 

        try {
            const response = await fetch('http://localhost:5001/auth/google-auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }),
            });

            const data = await response.json();

        } catch (err) {
            console.error(`Error sending JWT to back end: ${err}`);
        }
    }

    const handleGoogleLoginFailure = (error) => {
        console.error(`Failed Google Login. Error: ${error}`);
    }

    return (
        <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onFailure={handleGoogleLoginFailure}
        />
    )
}

export default GoogleAuth;