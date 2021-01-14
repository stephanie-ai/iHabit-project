const request = require('supertest');
const fs = require("fs");
const db = require("../db/config.js");
const app = require('../server.js');

const createHabits = fs.readFileSync(__dirname + '/../setup/2_create_habits.sql').toString();
// const createBooks = fs.readFileSync(__dirname + '/../db/migrations/2_create_books.sql').toString();
const seed = fs.readFileSync(__dirname + '/../setup/seeds.sql').toString();

const resetTestDB = () => {
    return new Promise (async (resolve, reject) => {
        try {
            await db.run(createHabits);
            // await db.run(createBooks);
            await db.run(seed);
            resolve('Test DB reset');
        } catch (err) {
            reject(`Test DB could not be reset: ${err} in ${err.file}`);
        };
    });
}

global.request = request;
global.app = app;
global.resetTestDB = resetTestDB;
global.port = process.env.PORT || 5000;