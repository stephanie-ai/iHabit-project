const db = require('../db/config');
const SQL = require("sql-template-strings");

const Daytrack = require('./daytrack');
const Weektrack = require('./weektrack');

class Habit {
    constructor(data, weekly_track, daily_track){
        this.id = data.id;
        this.habit = data.habit;
        this.user = data.user_id;
        this.weeklyNum = data.weekly_track;
        this.dailyNum = data.daily_track;
        // this.weeklytrack
        // this.dailytrack
        // this.user = { username: data.username, path: `/users/${data.user_id}}
    }

    static all(id){
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.run(SQL`SELECT * FROM habits WHERE user_id = ${id};`);
                const habits = result.rows.map(a => new Habit(a))
                resolve(habits)
            }catch(err){
                reject("Users habits could not be found.")
            }
        })
    }

    static create({habit, user, weeklyNum, dailyNum}){
        return new Promise ( async (resolve, reject) => {
            try{ 
                const result = await db.run(SQL`INSERT INTO habits (habit, user_id, weekly_track, daily_track) 
                                                    VALUES (${habit}, ${user}, ${weeklyNum}, ${dailyNum}) RETURNING *;`);
                //console.log(result.rows[0].id);

                let daynum = await Daytrack.createNewHabit(result.rows[0].id, user, dailyNum);
                console.log(daynum.rows[0]);

                let weeknum = await Weektrack.createNewHabit(result.rows[0].id, user);
                console.log(weeknum.rows[0]);

                resolve (result.rows[0]);
            }catch (err){
                reject ('Habit could not be created')
            }
        });
    };
}
module.exports = Habit

