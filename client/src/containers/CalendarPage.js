import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import SampleCalendar from "../components/Calendar/SampleCalendar";
import UserCalendar from "../components/Calendar/UserCalendar"
import useSampleCalendarData from "../hooks/useSampleCalendarData";
import useUserCalendarData from "../hooks/useUserCalendarData";
import { IoMdAddCircleOutline } from "react-icons/io";
import NewCalendarModal from "../components/Modals/NewCalendarModal";
import NavBar from "./NavBar";

const CalendarPage = ({ user, logoutGoogle }) => {

    const [showNewCalendarModal, setShowNewCalendarModal] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);

    const { data: sampleCalendarData, isLoading: isLoadingSample, error: sampleError } = useSampleCalendarData();
    const { data: userCalendarData, isLoading: isLoadingUser, error: userError } = useUserCalendarData(user?.id, refreshKey);
    
    const handleNewCalendarAdded = () => {
        setRefreshKey(prevKey => prevKey + 1);
        setShowNewCalendarModal(false);
    }

    if (user && isLoadingUser) return <p>Loading user calendars...</p>;
    if (!user && isLoadingSample) return <p>Loading sample calendar...</p>

    const userHasCalendars = user && userCalendarData.length > 0;
    const userHasNoCalendars = !userHasCalendars;

    const devButton = () => {
    }

    return (
        <>
            <div className="navbar-parent-container">
                {user && (<NavBar user={user} logoutGoogle={logoutGoogle} setShowNewCalendarModal={setShowNewCalendarModal} />)}
            </div>
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
                onCalendarAdded={handleNewCalendarAdded}
            />
        </>
    );

}

export default CalendarPage;