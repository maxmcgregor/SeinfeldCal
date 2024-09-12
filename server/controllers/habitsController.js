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
        res.status(500).json({ error: `There was an error retrieving a habit:  ${err.message}` });
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

exports.getUserHabitsWithDaysByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const query = 'SELECT h.id as habitId, h.start_date as habitStartDate, hd.id as habitDayId, h.name AS habitName, h.start_date AS startDate, hd.date, hd.completed, hd.week FROM habits h JOIN habit_days hd ON h.id = hd.habit_id WHERE h.user_id = ? ORDER BY hd.date';
        const [rows] = await pool.query(query, [userId]);
        
        if (rows.length === 0) {
            return res.status(200).json({ message: `User #${userId} does not have any habits yet.` });
        }
        
        // Group rows by habitId
        const habitsGroupedByHabitId = rows.reduce((acc, row) => {
            if (!acc[row.habitId]) {
                acc[row.habitId] = [];
            }
            acc[row.habitId].push(row);
            return acc;
        }, {});

        //Reshape data for each habit and return an array of reshaped habits
        const reshapedHabits = Object.values(habitsGroupedByHabitId).map(habitRows =>
            reshapeData.shapeHabitsWithDaysForReact(habitRows)
        );
        
        res.status(200).json(reshapedHabits);
        
    } catch (err) {
        res.status(500).json({ error: `There was an error retrieving habit days for the logged in user. Err: ${err.message}` });
    }
}

exports.createNewUserHabit = async (req, res) => {
    try {
        const { userId, habitName, startDate } = req.body;
                
        if (!userId || !habitName || !startDate) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        
        const query = "INSERT INTO HABITS (user_id, name, start_date) VALUES (?, ?, ?)"
        
        await pool.execute(query, [userId, habitName, startDate]);
        
        res.status(201).json({ message: 'Habit created successfully' });
    } catch (err) {
        res.status(500).json({error: `There was an error creating a new habit: ${err.message}`});
    }
}