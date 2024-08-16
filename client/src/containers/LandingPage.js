import React, { useState } from 'react';
import LoginForm from '../components/Login/LoginForm';
import CalendarPage from './CalendarPage';

const LandingPage = () => {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsUserLoggedIn(!isUserLoggedIn);
    }

    return (
        <div>
            {isUserLoggedIn ? (
                <CalendarPage handleLogin={handleLogin} />
            ) : (
                <>
                    <h1>Welcome to Seinfeld Cal ❌</h1>
                    <LoginForm handleLogin={handleLogin} />
                </>
            )}
        </div>
    )
}

export default LandingPage;