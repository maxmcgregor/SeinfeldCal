import React from "react";
import '../styling/LoginPage.css';
import CalendarPage from "./CalendarPage";
import LoginModal from "../components/Login/LoginModal";

const LoginPage = ({ setUser, setToken }) => {

    return (
        <div className="login-page-container">
        <LoginModal setUser={setUser} setToken={setToken}/>
        <CalendarPage />
        </div>
    )
}

export default LoginPage;