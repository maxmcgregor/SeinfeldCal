const shapeHabitsWithDaysForReact = (habitWithDaysData) => {
    const result = {};
    let habitName = null;
    
    habitWithDaysData.forEach(day => {
        const { date, completed, week, habitName: name } = day;

        if (!habitName) {
            habitName = name;
        }
        
        const formattedWeek = new Date(week).toISOString().split('T')[0];
        const formattedDate = new Date(date).toISOString().split('T')[0];
        
        if (!result[formattedWeek]) {
            result[formattedWeek] = {};
        }

        result[formattedWeek][formattedDate] = completed;
    });
    
    // Convert result object to desired format
    const finalResult = Object.keys(result).map(weekStartDate => {
        // Convert weekStartDate to Date object
        const startOfWeek = new Date(weekStartDate);
        const days = Array(7).fill(null).map((_, index) => {
            const currentDay = new Date(startOfWeek.getTime() + index * 24 * 60 * 60 * 1000);
            const dateStr = currentDay.toISOString().split('T')[0]; // Format date as YYYY-MM-DD

            return {
                date: dateStr,
                completed: result[weekStartDate][dateStr] || 0 // Default to 0/incomplete if not found. This keeps the week as 7 days long
            };
        });

        return {
            habitName,
            weekStartDate: weekStartDate,
            days
        };
    });

    return finalResult;
} 
    
module.exports = {
    shapeHabitsWithDaysForReact
}