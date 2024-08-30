const jwt = require('jsonwebtoken');
const pool = require('../config/db');
require('dotenv').config();

const generateJWT = (user) => {
    const { id: userId, email: userEmail } = user;
    const jwtPayload = { id: userId, email: userEmail };
    const jwtToken = jwt.sign(jwtPayload, process.env.JWT_SECRET, { expiresIn: '365d' });
    return jwtToken;
}

const getUserByEmailOrGoogleId = async (payload) => {

    try {
        const { email, google_id } = payload;
        const query = "SELECT * FROM users where email = ? OR google_id = ?"
        const [user] = await pool.query(query, [email, google_id]);

        return user;
    } catch (err) {
        res.status(500).json({ error: `Error getting user by email or google id: ${err.message}` });
    }
}

const insertUserWithGooglePayload = async (payload) => {
    try {
        const { email, given_name: first_name, family_name: last_name, picture, sub: google_id } = payload;
        const full_name = `${first_name} ${last_name}`;

        const insertQuery = "INSERT INTO users (google_id, email, full_name, first_name, last_name, picture) VALUES (?, ?, ?, ?, ?, ?)";
        await pool.query(insertQuery, [google_id, email, full_name, first_name, last_name, picture]);

        const selectQuery = "SELECT * FROM users WHERE email = ?";
        const [user] = await pool.query(selectQuery, [email]);

        return user;
    } catch (err) {
        res.status(500).json({ error: `Error inserting new user: ${err.message}` });
    }
}

module.exports = {
    generateJWT,
    getUserByEmailOrGoogleId,
    insertUserWithGooglePayload
}