import React from "react";
import { ImArrowRight, ImArrowLeft } from "react-icons/im";

const CalendarHeaderSwitcher = ({ onNext, onPrev, calendarName }) => {
    return (
        <div className="calendar-header-switcher">
            <ImArrowLeft style={{ cursor: 'pointer' }} onClick={onPrev} size={36} />
            <h1 className="calendar-header-title">{calendarName} Tracker</h1>
            <ImArrowRight style={{ cursor: 'pointer' }} onClick={onNext} size={36} />
        </div>
    )
}

export default CalendarHeaderSwitcher;