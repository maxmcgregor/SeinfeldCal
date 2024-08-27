const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

router.post('/google-auth', AuthController.authorizeUserWithGoogle);

module.exports = router;