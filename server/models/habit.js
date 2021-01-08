const db = require('../db/config');
const SQL = require("sql-template-strings");

class Habit {
    constructor(data, weekly_track, daily_track){
        this.id = data.id;
        this.habit = data.habit;
        // this.weeklytrack
        // this.dailytrack
        // this.user = { username: data.username, path: `/users/${data.user_id}}
    }
}
module.exports = Habit

