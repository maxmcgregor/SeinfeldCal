const pool = require('../config/db');

exports.getHabits = async (req, res) => {
    try {
        const query = 'SELECT * FROM habits';
        const [rows] = await pool.query(query);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: `There was an error retrieving all habits. Err: ${err.message}` });
    }
}