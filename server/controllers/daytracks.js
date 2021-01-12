const express = require('express');
const router = express.Router();

const Daytrack = require('../models/daytrack');

router.get('/:id', async (req, res) => {
    try{
        const day = await Daytrack.all(req.params.id);
        res.json(day)
    }catch(err){
        res.status(500).json({err})
    }
});

router.patch('/:userid/:habitid', async(req, res)=>{
    try{
        const habit = await Daytrack.findUserAndHabit(req.params.userid, req.params.habitid);
        if(habit.completion > 0){
            const decre = await habit.didHabit(habit.id);
        }else{
            const completeHabit = await habit.completeHabit(habit.id);
        }
        //console.log(decre);
        res.status(204).end();
    }catch(err){
        res.status(500).json({err});
    }
})

module.exports = router;