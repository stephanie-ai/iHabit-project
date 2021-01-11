const express = require('express');
const router = express.Router();

const User = require('../models/user');

//not sure when we would want to get all users or why
router.get('/', async (req, res) => {
    try{
        const users = await User.all
        res.json(users)
    }catch(err){
        res.status(500).json({err})
    }
})

module.exports = router