const express = require('express');
const router = express.Router();
const habitDaysController = require('../controllers/habitDaysController');

router.put('/completed/:habitDayId', habitDaysController.updateHabitDayCompleted);

module.exports = router;