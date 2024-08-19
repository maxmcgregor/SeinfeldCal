const express = require('express');
const router = express.Router();
const habitsController = require('../controllers/habitsController');

router.get('/all_habits', habitsController.getHabits);

module.exports = router;