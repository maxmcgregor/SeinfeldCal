import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import CalendarHeader from "../components/Calendar/CalendarHeader";
import CalendarBody from "../components/Calendar/CalendarBody";

const CalendarPage = ({ handleLogin }) => {
    
    //required variables: calendar name, habit start date, history of completed/not completed
    //required functions: check/uncheck a day (prob need this in calendar body)
    const [calendarData, setCalendarData] = useState(
        {
            "calendarName": "Exercise",
            "calendarStartDate": "2024-08-01T00:00:00Z",
            "successHistory": {
                "2024-07-28T00:00:00Z": { // Week of 2024-07-28 to 2024-08-03
                    "2024-08-01T00:00:00Z": true,
                    "2024-08-02T00:00:00Z": true,
                    "2024-08-03T00:00:00Z": false
                },
                "2024-08-04T00:00:00Z": { // Week of 2024-08-04 to 2024-08-10
                    "2024-08-04T00:00:00Z": true,
                    "2024-08-05T00:00:00Z": true,
                    "2024-08-06T00:00:00Z": true,
                    "2024-08-07T00:00:00Z": false,
                    "2024-08-08T00:00:00Z": true,
                    "2024-08-09T00:00:00Z": true,
                    "2024-08-10T00:00:00Z": false
                },
                "2024-08-11T00:00:00Z": { // Week of 2024-08-11 to 2024-08-17
                    "2024-08-11T00:00:00Z": true,
                    "2024-08-12T00:00:00Z": true,
                    "2024-08-13T00:00:00Z": true,
                    "2024-08-14T00:00:00Z": false,
                    "2024-08-15T00:00:00Z": true,
                    "2024-08-16T00:00:00Z": true,
                    //nothing here yet bc did this owrk on 8/16, will programmatically add days later
                }
            }
        }

    );

    const quickLogout = () => {
        handleLogin();
    }

    return (
        <>
            <div>
                <CalendarHeader calendarName={calendarData.calendarName} />
            </div>
            <div>
                <CalendarBody calendarData={calendarData} />
            </div>
            <br/>
            <Button variant='danger' onClick={quickLogout}>Quick logout for dev purposes</Button>
        </>
    )
}

export default CalendarPage;