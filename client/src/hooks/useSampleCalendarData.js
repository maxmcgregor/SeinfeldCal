import { useState, useEffect } from 'react';

const useSampleCalendarData = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSampleCalendarData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_NODE_BASE_URL}/api/habits/habit_with_days/7`);
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        }

        fetchSampleCalendarData();
    }, []);

    return { data, isLoading, error };
}

export default useSampleCalendarData;