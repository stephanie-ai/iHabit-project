const express = require('express');
const router = express.Router();

const Habit = require('../models/habit');

//we would want to search the habits by user name instead of user id
router.get('/:id', async (req, res) => {
    try{
        const habits = await Habit.all(parseInt(req.params.id));
        res.json(habits);
    }catch (err) {
        res.status(500).json({err});
    }
});

router.post('/', async (req, res) =>{
    try{
        const habits = await Habit.create(req.body);
        res.json(habits);
    }catch (err) {
        res.status(500).json({err});
    }
})

module.exports = router