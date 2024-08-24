const pool = require('../config/db');
require('dotenv').config();
const { OAuth2Client } = require('google-auth-library');

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.authorizeUserWithGoogle = async (req, res) => {
    const { token } = req.body;
    
    try {
        const ticket = await googleClient.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();

        res.status(200).json({ payload });
    } catch (err) {
        res.status(400).json({ err });
    }
}