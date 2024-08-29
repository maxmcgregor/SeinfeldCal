import React, { useState, useEffect } from 'react';
import GoogleAuth from '../components/Authentication/GoogleAuth';
import CalendarPage from './CalendarPage';
import LoginPage from './LoginPage';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import '../styling/LandingPage.css';
import Button from "react-bootstrap/Button";


const LandingPage = () => {


    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authenticatedUser')));
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('authenticatedUser')));
        setToken(localStorage.getItem('token'));
    }, []);


    const devButton = () => {
        console.log(JSON.parse(localStorage.getItem('authenticatedUser')));
        console.log(localStorage.getItem('token'));

        console.log("user: ", user);
        console.log("token: ", token);
    }

    const googleLogoutButton = () => {
        googleLogout();
        localStorage.removeItem('token');
        localStorage.removeItem('authenticatedUser');
        setUser(null);
        setToken(null);
    }

    return (
        <div className='landing-page-container'>
            {user && token ? (
                <CalendarPage user={user} />
            ) : (
                <LoginPage setUser={setUser} setToken={setToken} />
            )}
            <Button variant="warning" onClick={googleLogoutButton}>Google logout</Button>
            <Button variant="dark" onClick={devButton}>Dev button</Button>
        </div>
    )
}

export default LandingPage;