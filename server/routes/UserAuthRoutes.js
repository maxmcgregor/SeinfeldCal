const express = require('express');
const router = express.Router();
const UserAuthController = require('../controllers/UserAuthController');

router.post('/google-auth', UserAuthController.authorizeUserWithGoogle);

module.exports = router;