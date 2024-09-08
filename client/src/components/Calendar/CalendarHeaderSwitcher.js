import React from "react";
import { ImArrowRight, ImArrowLeft } from "react-icons/im";

const CalendarHeaderSwitcher = ({ onNext, onPrev, calendarName, numberOfCalendars }) => {
    return (
        <div className="calendar-header-switcher">
            {numberOfCalendars > 1 && <ImArrowLeft style={{ cursor: 'pointer' }} onClick={onPrev} size={36} />}
            <h1 className="calendar-header-title">{calendarName} Tracker</h1>
            {numberOfCalendars > 1 && <ImArrowRight style={{ cursor: 'pointer' }} onClick={onNext} size={36} />}
        </div>
    )
}

export default CalendarHeaderSwitcher;