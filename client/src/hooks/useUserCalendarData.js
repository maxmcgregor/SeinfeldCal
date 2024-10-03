import { useState, useEffect } from 'react';

const useUserCalendarData = (userId, refreshKey) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_NODE_BASE_URL}/api/habits/user/${userId}/habits_with_days/`);
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err || 'An error occurred fetching user calendar data');
            } finally {
                setIsLoading(false);
            }
        }
        
        fetchUserData();
    }, [userId, refreshKey]);
    
    return {data, isLoading, error}
}

export default useUserCalendarData;