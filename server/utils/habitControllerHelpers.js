const shapeHabitsWithDaysForReact = (habitWithDaysData) => {
    const result = {};
    let habitName = null;
    let habitId = null;
    let habitStartDate = null;
    
    habitWithDaysData.forEach(day => {
        const { date, completed, week, habitName: name, habitId: id, habitStartDate: habitStartDateValue, habitDayId } = day;

        if (!habitName) {
            habitName = name;
        }
        
        if (!habitId) {
            habitId = id;
        }

        if (!habitStartDate) {
            habitStartDate = new Date(habitStartDateValue).toISOString().split('T')[0]
        }

        const formattedWeek = new Date(week).toISOString().split('T')[0];
        const formattedDate = new Date(date).toISOString().split('T')[0];
        
        if (!result[formattedWeek]) {
            result[formattedWeek] = {};
        }

        result[formattedWeek][formattedDate] = {
            completed,
            habitDayId: habitDayId || null
        };
    });
    
    // Convert result object to desired format
    const weeks = Object.keys(result).map(weekStartDate => {
        
        const startOfWeek = new Date(weekStartDate);
        const days = Array(7).fill(null).map((_, index) => {
            const currentDay = new Date(startOfWeek.getTime() + index * 24 * 60 * 60 * 1000);
            const dateStr = currentDay.toISOString().split('T')[0]; // Format date as YYYY-MM-DD. Might be a better way to do this.
            const dayData = result[weekStartDate][dateStr] || { completed: 0, habitDayId: null };
            
            return {
                date: dateStr,
                completed: dayData.completed, // Default to 0/incomplete if not found. This keeps the week as 7 days long
                habitDayId: dayData.habitDayId
            };
        });

        return {
            weekStartDate: weekStartDate,
            days
        };
    }).filter(Boolean);

    return { habitName, habitId, habitStartDate, weeks };
}

module.exports = {
    shapeHabitsWithDaysForReact
}