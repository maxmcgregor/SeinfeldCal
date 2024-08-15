import React, { useState } from 'react';
import LoginForm from '../components/Login/LoginForm';
import HomePage from './HomePage';

const LandingPage = () => {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const handleLogin = () => {
        console.log("handleLogin was called");
        setIsUserLoggedIn(!isUserLoggedIn);
    }

    return (
        <div>
            {isUserLoggedIn ? (
                <HomePage handleLogin={handleLogin} />
            ) : (
                <>
                    <h1>Welcome to Seinfeld Cal</h1>
                    <LoginForm handleLogin={handleLogin} />
                </>
            )}
        </div>
    )
}

export default LandingPage;