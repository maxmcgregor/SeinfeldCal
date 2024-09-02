const express = require('express');
const router = express.Router();
const habitsController = require('../controllers/habitsController');

//root route: /api/habits
router.get('/all_habits', habitsController.getHabits);
router.get('/:id', habitsController.getHabitById);
router.get('/habit_with_days/:habitId', habitsController.getHabitWithDaysByHabitId);
router.get('/user/:userId/habits_with_days/', habitsController.getUserHabitsWithDaysByUserId);
router.put('/new_habit', habitsController.createNewUserHabit);

module.exports = router;