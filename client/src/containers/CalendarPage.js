import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import CalendarHeader from "../components/Calendar/CalendarHeader";
import CalendarBody from "../components/Calendar/CalendarBody";

const CalendarPage = ({ handleLogin }) => {

    const [calendarDataReal, setCalendarDataReal] = useState(null);

    useEffect(() => {
        const fetchAllCalendarData = async () => {
            try {
                const response = await fetch("http://localhost:5001/api/habits/habit_with_days/1");
                const calendarData = await response.json();
                setCalendarDataReal(calendarData);
            } catch (err) {
                console.error(`There was an error with fetchAllCalendarData: ${err}`);
            }
        }

        fetchAllCalendarData();
    }, []);

    const quickLogout = () => {
        // handleLogin();
        console.log("calendarDataReal: ", calendarDataReal);
        if (calendarDataReal) {
            console.log("habit name: ", calendarDataReal.habitName);
        }
    }

    return (
        <>
            {calendarDataReal ? (
                <>
                    <div>
                        <CalendarHeader calendarName={calendarDataReal.habitName} />
                    </div>
                    <div>
                        <CalendarBody
                            key={1}
                            calendarDataReal={calendarDataReal}
                        />
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
            <br />
            <Button variant='danger' size="sm" onClick={quickLogout}>CalendarPage</Button>
        </>
    )
}

export default CalendarPage;