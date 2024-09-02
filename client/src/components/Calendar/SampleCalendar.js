import React from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";

const SampleCalendar = ({calendarData}) => {
    
    return (
        <>
            <CalendarHeader calendarName={"Habit"} />
            <CalendarBody
                key={calendarData.habitId}
                calendarData={calendarData}
            />
        </>
    )
}

export default SampleCalendar;