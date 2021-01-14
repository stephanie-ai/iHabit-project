const request = require('supertest');
const fs = require("fs");
const db = require("../api/dbconfig.js");
const app = require("../api/server.js");

const createUsers = fs.readFileSync(__dirname + '/../setup/1_create_users.sql').toString();
const createHabits = fs.readFileSync(__dirname + '/..setup/2_create_habits.sql').toString();
const createDaytrack = fs.readFileSync(__dirname + '/..setup/3_create_daytrack.sql').toString();
const createWeektrack = fs.readFileSync(__dirname + '/..setup/4_create_weektrack.sql').toString();

const seed = fs.readFileSync(__dirname + '/seeds.sql').toString();

const resetTestDB = () => {
    return new Promise (async (resolve, reject) => {
        try {
            await db.run(createUsers);
            await db.run(createHabits);
            await db.run(createDaytrack);
            await db.run(createWeektrack);
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