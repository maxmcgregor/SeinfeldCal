import React from "react";
import '../styling/LoginPage.css';
import LoginModal from "../components/Login/LoginModal";
import useSampleCalendarData from "../hooks/useSampleCalendarData";
import SampleCalendar from "../components/Calendar/SampleCalendar";

const LoginPage = ({ setUser, setToken }) => {
    
    const { data: sampleCalendarData, isLoading: isLoadingSample, error: sampleError } = useSampleCalendarData();
    
    if (isLoadingSample) {
        return (<div className="login-page-container">
            <LoginModal setUser={setUser} setToken={setToken} />
            <p>Loading calendar data...</p>
        </div>)
    } else {
        return (
            <div className="login-page-container">
                <LoginModal setUser={setUser} setToken={setToken} />
                <SampleCalendar
                    calendarData={sampleCalendarData}
                    error={sampleError}
                />
            </div>
        )
    }
}

export default LoginPage;