const express = require('express');
const router = express.Router();

const Weektrack = require('../models/weektrack');

router.get('/:id/:date', async (req, res) => {
    try {
        const week = await Weektrack.all(req.params.id, req.params.date);
        res.json(week)
    }catch(err){
        res.status(500).json({err})
    }
})

module.exports = router