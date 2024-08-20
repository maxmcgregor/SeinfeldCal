const pool = require('../config/db');
const reshapeData = require('../utils/habitControllerHelpers');

exports.getHabits = async (req, res) => {
    try {
        const query = 'SELECT * FROM habits';
        const [rows] = await pool.query(query);
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ error: `There was an error retrieving all habits. Err: ${err.message}` });
    }
}

exports.getHabitById = async (req, res) => {
    try {
        const { id } = req.params;
        const query = 'SELECT * FROM habits WHERE id = ?';
        const [rows] = await pool.query(query, [id]);
        
        if (rows.length === 0) {
            return res.status(404).json({ error: `Habit with id ${id} not found.` });
        }
        res.status(200).json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: `There was an error retrieving habit with id ${id}. Err: ${err.message}` });
    }
}

exports.getHabitWithDaysByHabitId = async (req, res) => {
    try {
        const { habitId } = req.params;
        const query = 'SELECT h.id as habitId, h.start_date as habitStartDate, hd.id as habitDayId, h.name AS habitName, h.start_date AS startDate, hd.date, hd.completed, hd.week FROM habits h JOIN habit_days hd ON h.id = hd.habit_id WHERE h.id = ? ORDER BY hd.date';
        const [rows] = await pool.query(query, [habitId]);
        
        if (rows.length === 0) {
            return res.status(404).json({ error: `Habit days for habit with id ${habitId} were not found.` });
        }
        
        const reshapedHabitDays = reshapeData.shapeHabitsWithDaysForReact(rows);

        res.status(200).json(reshapedHabitDays);
    } catch (err) {
        res.status(500).json({ error: `There was an error retrieving habit days. Err: ${err.message}` });
    }
}