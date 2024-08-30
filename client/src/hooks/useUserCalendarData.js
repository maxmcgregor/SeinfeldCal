import { useState, useEffect } from 'react';

const useUserCalendarData = (userId) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:5001/api/habits/user/${userId}/habits_with_days/`);
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        }
        
        fetchUserData();
    }, []);
    
    return {data, isLoading, error}
}

export default useUserCalendarData;