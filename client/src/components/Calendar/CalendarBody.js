import React, {useEffect, useRef} from 'react';
import CalendarWeek from './CalendarWeek';
import { FormatDate } from '../../utils/CalendarHelpers';
import '../../styling/CalendarDay.css';
import Button from 'react-bootstrap/Button';


const CalendarBody = ({ calendarData }) => {

    const { weeks, habitStartDate } = calendarData;
    const formattedHabitStartDate = FormatDate(habitStartDate, 'long', 'numeric', 'numeric', true, true, true);
    
    const scrollRef = useRef(null);
    
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [weeks]);

    const devButton = () => {
        console.log("weeks: ", weeks);
        console.log("habitStartDate: ", habitStartDate);
        console.log("formattedHabitStartDate: ", formattedHabitStartDate);
    }

    return (
        <>
            {/* format this dynamically like you do the title. on a big enough screen it's kind of fucked up */}
            <p className="sticky-date-started-header">Habit started {formattedHabitStartDate}</p> 
            <div className="scrollable-calendar-weeks" ref={scrollRef}>
            {weeks.map((weekData, index) => (
                <CalendarWeek
                    key={weekData.weekStartDate}
                    weekData={weekData}
                    habitStartDate={habitStartDate}
                />
            ))}
            </div>
            <br /><br />
            {/* <Button variant='danger' size="sm" onClick={devButton}>CalendarBody</Button> */}
        </>
    )
}

export default CalendarBody;