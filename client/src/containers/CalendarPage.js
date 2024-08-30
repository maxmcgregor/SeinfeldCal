import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import CalendarHeader from "../components/Calendar/CalendarHeader";
import CalendarBody from "../components/Calendar/CalendarBody";

const CalendarPage = ({user}) => {

    const [sampleCalendarData, setSampleCalendarData] = useState(null);
    const [userCalendarData, setUserCalendarData] = useState(null);

    useEffect(() => {
        const fetchSampleCalendarData = async () => {
            try {
                const response = await fetch("http://localhost:5001/api/habits/habit_with_days/1");
                const sampleCalendarData = await response.json();
                setSampleCalendarData(sampleCalendarData);
            } catch (err) {
                console.error(`There was an error with fetchSampleCalendarData: ${err}`);
            }
        }

        const fetchUserCalendarData = async (userId) => {
            try {
                const response = await fetch(`http://localhost:5001/api/habits/user/${userId}/habits_with_days/`);
                const userCalendarData = await response.json();
                setUserCalendarData(userCalendarData);
            } catch (err) {

            }
        }

        if (!user) {
            fetchSampleCalendarData();
        } else {
            console.log("pretending to call fetchUserCalendarData");
            // fetchUserCalendarData(user.id);
            fetchSampleCalendarData();
        }
    }, []);

    const devButton = () => {
        console.log("sampleCalendarData: ", sampleCalendarData);
        if (sampleCalendarData) {
            console.log("habit name: ", sampleCalendarData.habitName);
            console.log("start date: ", sampleCalendarData.habitStartDate);
        }
    }

    return (
        <>
            {/* replace below by checking for userCalendarData, then passing the current components into a forEach situation. idk brainstorm how it'll work. you'll want to toggle between habits with arrows */}
            {sampleCalendarData ? (
                <>
                    <div>
                        <CalendarHeader calendarName={sampleCalendarData.habitName} />
                    </div>
                    <div>
                        <CalendarBody
                            key={sampleCalendarData.habitId}
                            calendarData={sampleCalendarData}
                        />
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
            <br />
            {/* <Button variant='danger' size="sm" onClick={devButton}>CalendarPage</Button> */}
        </>
    )
}

export default CalendarPage;