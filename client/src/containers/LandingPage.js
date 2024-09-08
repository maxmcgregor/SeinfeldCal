import React, { useState, useEffect } from 'react';
import CalendarPage from './CalendarPage';
import LoginPage from './LoginPage';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import '../styling/LandingPage.css';
import Button from "react-bootstrap/Button";
import NavBar from './NavBar';

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
        <>
            <NavBar onLogout={googleLogoutButton} user={user} />
            <div className='landing-page-container'>
                {user && token ? (
                    <>
                    <CalendarPage user={user} />
                    {/* <Button variant="dark" onClick={devButton}>Landing Page</Button> */}
                    </>
                ) : (
                    <LoginPage setUser={setUser} setToken={setToken} />
                )}
            </div>
        </>
    )
}

export default LandingPage;