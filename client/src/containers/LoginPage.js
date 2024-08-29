import React from "react";
import GoogleAuth from "../components/Authentication/GoogleAuth";
import '../styling/LoginPage.css';
import CalendarPage from "./CalendarPage";

const LoginPage = ({ setUser, setToken }) => {

    return (
        <div className='login-page-container'>
            <div className='login-page-banner'>
                <h2>Welcome to Seinfeld Calendar</h2>
                <p>This is a sample page. To create your own trackers, login with Google</p>
                <GoogleAuth setUser={setUser} setToken={setToken} />
            </div>
            <br/>
            <CalendarPage />
        </div>
    )
}

export default LoginPage;