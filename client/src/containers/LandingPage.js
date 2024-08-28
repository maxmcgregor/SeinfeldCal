import React, { useState, useEffect } from 'react';
import GoogleAuth from '../components/Authentication/GoogleAuth';
import CalendarPage from './CalendarPage';
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
                    //pass user object into calendar page so their specific info renders 
                    //you'll have to update endpoints to use user id to get the correct items
                <CalendarPage user={user} /> 
            ) : (
                <>
                    <h1>Welcome to Seinfeld Cal ❌</h1>
                    <GoogleAuth setUser={setUser} setToken={setToken} />

                </>
            )}
            <Button variant="warning" onClick={googleLogoutButton}>Google logout</Button>
            <Button variant="dark" onClick={devButton}>Dev button</Button>
        </div>
    )
}

export default LandingPage;