const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

// const authRoutes = require('./controllers/auth');
// server.use('/auth', authRoutes);

server.get('/', (req,res)=> res.send('Welcome to ihabit'));

const authRoutes = require('./controllers/auth');
server.use('/auth', authRoutes);

const userRoutes = require('./controllers/users');
server.use('/user', userRoutes);

const habitRoutes = require('./controllers/habits');
server.use('/habit', habitRoutes);

const daytrackRoutes = require('./controllers/daytracks');
server.use('/daytrack', daytrackRoutes);

const weektrackRoutes = require('./controllers/weektracks');
server.use('/weektrack', weektrackRoutes);

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Express now departing from http://localhost:${port}`));