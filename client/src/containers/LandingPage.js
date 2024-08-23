import React, { useState } from 'react';
import LoginForm from '../components/Login/LoginForm';
import CalendarPage from './CalendarPage';
import { GoogleLogin } from '@react-oauth/google';
import '../styling/LandingPage.css';


const LandingPage = () => {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsUserLoggedIn(!isUserLoggedIn);
    }

    const responseMessage = (credentialResponse) => {
        console.log("Google Login Successful: ", credentialResponse);
    };

    const errorMessage = (error) => {
        console.error("Google Login Error: ", error);
    }
    return (
        <div className='landing-page-container'>
            {isUserLoggedIn ? (
                <CalendarPage handleLogin={handleLogin} />
            ) : (
                <>
                    <h1>Welcome to Seinfeld Cal ❌</h1>
                    <LoginForm handleLogin={handleLogin} />
                    <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
                </>
            )}
        </div>
    )
}

export default LandingPage;