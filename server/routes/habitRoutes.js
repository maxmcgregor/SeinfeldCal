const express = require('express');
const router = express.Router();
const habitsController = require('../controllers/habitsController');

router.get('/all_habits', habitsController.getHabits);
router.get('/:id', habitsController.getHabitById);
router.get('/habit_with_days/:id', habitsController.getHabitWithDaysByHabitId);

module.exports = router;