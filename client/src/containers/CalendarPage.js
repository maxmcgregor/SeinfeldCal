import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import CalendarHeader from "../components/Calendar/CalendarHeader";
import CalendarBody from "../components/Calendar/CalendarBody";

const CalendarPage = ({user}) => {

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

    const devButton = () => {
        console.log("calendarDataReal: ", calendarDataReal);
        if (calendarDataReal) {
            console.log("habit name: ", calendarDataReal.habitName);
            console.log("start date: " , calendarDataReal.habitStartDate);
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
                            key={calendarDataReal.habitId}
                            calendarDataReal={calendarDataReal}
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