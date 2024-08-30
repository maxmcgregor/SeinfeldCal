require('dotenv').config();
const { OAuth2Client } = require('google-auth-library');
const helper = require('../utils/AuthControllerHelpers');

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.authorizeUserWithGoogle = async (req, res) => {
    const { token } = req.body;

    try {
        const ticket = await googleClient.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload(); 
        
        let user = await helper.getUserByEmailOrGoogleId(payload);

        if (user.length === 0) {
            user = await helper.insertUserWithGooglePayload(payload);
        } 

        const jwt = helper.generateJWT(user);

        res.status(200).json({ token: jwt, user });
    } catch (err) {
        res.status(400).json({ error: `Google authorization failed: ${err.message}` });
    }
}

