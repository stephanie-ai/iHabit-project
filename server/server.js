const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

// const authRoutes = require('./controllers/auth');
// server.use('/auth', authRoutes);

server.get('/', (req,res)=> res.send('Welcome to ihabit'));

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Express now departing from http://localhost:${port}`));