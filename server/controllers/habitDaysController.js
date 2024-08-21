const pool = require('../config/db');

exports.updateHabitDayCompleted = async (req, res) => {
    try {
        const { habitDayId } = req.params;
        const { completed } = req.body;
        const query = 'UPDATE habit_days SET completed = ? WHERE id = ?';
        const response = await pool.query(query, [completed, habitDayId]);
        res.status(200).json({message: `Habit day with id ${habitDayId} updated successfully`});
    } catch (err) {
        res.status(500).json({error: `There was an error updating `})
    }
}