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
})

module.exports = router;