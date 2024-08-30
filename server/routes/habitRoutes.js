const express = require('express');
const router = express.Router();
const habitsController = require('../controllers/habitsController');

router.get('/all_habits', habitsController.getHabits);
router.get('/:id', habitsController.getHabitById);
router.get('/habit_with_days/:habitId', habitsController.getHabitWithDaysByHabitId);
router.get('/user/:userId/habits_with_days/', habitsController.getUserHabitsWithDaysByUserId);

module.exports = router;