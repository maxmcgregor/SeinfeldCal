import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const GoogleAuth = ({ setUser, setToken }) => {

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

            if (data.token && data.user && Array.isArray(data.user)) {
                const userObject = data.user[0];
                localStorage.setItem("token", data.token);
                localStorage.setItem("authenticatedUser", JSON.stringify(userObject));
                setUser(userObject);
                setToken(data.token);
            } else {
                console.error('Unexpected response format:', data);
            }

        } catch (err) {
            console.error(`Error sending Google JWT to back end: ${err}`);
        }
    }

    const handleGoogleLoginFailure = (error) => {
        console.error(`Failed Google Login. Error: ${error}`);
    }

    return (
        <div className="google-login-container">
            <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onFailure={handleGoogleLoginFailure}
                size={"large"}     
                shape={"pill"}
            />
        </div>
    )
}

export default GoogleAuth;