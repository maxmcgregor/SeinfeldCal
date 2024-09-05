import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import SampleCalendar from "../components/Calendar/SampleCalendar";
import UserCalendar from "../components/Calendar/UserCalendar"
import useSampleCalendarData from "../hooks/useSampleCalendarData";
import useUserCalendarData from "../hooks/useUserCalendarData";
import { IoMdAddCircleOutline } from "react-icons/io";
import NewCalendarModal from "../components/Calendar/NewCalendarModal";

const CalendarPage = ({ user }) => {
    
    const [showNewCalendarModal, setShowNewCalendarModal] = useState(false);

    const { data: sampleCalendarData, isLoading: isLoadingSample, error: sampleError } = useSampleCalendarData();
    const { data: userCalendarData, isLoading: isLoadingUser, error: userError } = useUserCalendarData(user?.id);

    if (user && isLoadingUser) return <p>Loading user calendars...</p>;
    if (!user && isLoadingSample) return <p>Loading sample calendar...</p>

    const userHasCalendars = user && userCalendarData.length > 0;
    const userHasNoCalendars = !userHasCalendars;

    const devButton = () => {
    }

    return (
        <>
            {userHasCalendars ? (
                <>
                    {/* <Button className="calendar-page-button" variant='danger' size="sm" onClick={devButton}>CalendarPage</Button> */}
                    <UserCalendar calendars={userCalendarData} error={userError} />
                </>
            ) : userHasNoCalendars ? (
                <>
                    <IoMdAddCircleOutline onClick={() => setShowNewCalendarModal(true)} style={{ cursor: 'pointer' }} size={56} />
                    <p>Add your first habit</p>
                </>
            ) : (
                <SampleCalendar calendarData={sampleCalendarData} error={sampleError} />
            )}

            {/* Pass the modal visibility state and handlers to the modal component */}
            <NewCalendarModal
                showModal={showNewCalendarModal}
                handleClose={() => setShowNewCalendarModal(false)}
                userId={user.id}
            />
        </>
    );

}

export default CalendarPage;

// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import SampleCalendar from "../components/Calendar/SampleCalendar";
// import UserCalendar from "../components/Calendar/UserCalendar";
// import useSampleCalendarData from "../hooks/useSampleCalendarData";
// import useUserCalendarData from "../hooks/useUserCalendarData";
// import { IoMdAddCircleOutline } from "react-icons/io";
// import NewCalendarModal from "../components/Calendar/NewCalendarModal";

// const CalendarPage = ({ user }) => {
//     const [showNewCalendarModal, setShowNewCalendarModal] = useState(false);

//     const { data: sampleCalendarData, isLoading: isLoadingSample, error: sampleError } = useSampleCalendarData();
//     const { data: userCalendarData, isLoading: isLoadingUser, error: userError } = useUserCalendarData(user?.id);

//     const isLoading = user ? isLoadingUser : isLoadingSample;
//     const hasCalendars = user && userCalendarData?.length > 0;

//     if (isLoading) {
//         return <p>{user ? "Loading user calendars..." : "Loading sample calendar..."}</p>;
//     }

//     return (
//         <>
//             {hasCalendars ? (
//                 <UserCalendar calendars={userCalendarData} error={userError} />
//             ) : (
//                 <>
//                     <IoMdAddCircleOutline onClick={() => setShowNewCalendarModal(true)} style={{ cursor: 'pointer' }} size={56} />
//                     <p>Add your first habit</p>
//                     <SampleCalendar calendarData={sampleCalendarData} error={sampleError} />
//                 </>
//             )}

//             <Button size="lg" className="calendar-page-button" variant='danger' onClick={() => console.log("User data:", user, "Calendars:", userCalendarData)}>Calendar Page</Button>

//             <NewCalendarModal
//                 showModal={showNewCalendarModal}
//                 handleClose={() => setShowNewCalendarModal(false)}
//                 userId={user?.id}
//             />
//         </>
//     );
// }

// export default CalendarPage;
