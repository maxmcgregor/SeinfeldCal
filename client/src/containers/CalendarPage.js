import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import SampleCalendar from "../components/Calendar/SampleCalendar";
import UserCalendar from "../components/Calendar/UserCalendar"
import useSampleCalendarData from "../hooks/useSampleCalendarData";
import useUserCalendarData from "../hooks/useUserCalendarData";

const CalendarPage = ({ user }) => {
    
    const { data: sampleCalendarData, isLoading: isLoadingSample, error: sampleError } = useSampleCalendarData();
    const { data: userCalendarData, isLoading: isLoadingUser, error: userError } = useUserCalendarData(user?.id);
    
    if (user && isLoadingUser) return <p>Loading user calendars...</p>;
    if (!user && isLoadingSample) return <p>Loading sample calendar...</p>

    const devButton = () => {
        console.log("user: ", user);
        console.log("userCalendarData: ", userCalendarData);
    }
    
    if (user) {
        return (
            <>
            <UserCalendar
                calendars={userCalendarData}
                error={userError}
            />
                {/* <Button variant='danger' size="sm" onClick={devButton}>CalendarPage</Button> */}
            </>
        )
    } else {
        return (
            <SampleCalendar
                calendarData={sampleCalendarData}
                error={sampleError}
            />
        )
    }
    
}

export default CalendarPage;