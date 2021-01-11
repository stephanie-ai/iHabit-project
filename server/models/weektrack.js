const SQL = require("sql-template-strings");
const db = require('../db/config');

const moment = require('moment');

class Weektrack {
    constructor(data){
        this.id = data.id
        this.user = data.user_id;
        this.habit = data.habit_id
        this.mon = data.mon
        this.tue = data.tue
        this.wed = data.wed
        this.thu = data.thu
        this.fri = data.fri
        this.sat = data.sat
        this.sun = data.sun
        this.comp_average= data.completion_average
        this.start_date = data.start_date
    }
    static all(id, date){
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.run(SQL`SELECT * FROM weektrack 
                                                    WHERE user_id = ${id}
                                                    AND start_date = ${date};`)
                const weeklyhabits = result.rows.map(a => new Weektrack(a))
                resolve(weeklyhabits);
            }catch(err){
                reject("Users habits could not be found for this week.")
            }
        })
    }

    m = moment();

    static createNewHabit(habitId, userId){
        return new Promise (async (resolve, reject) => {
            try {
                const habitData = await db.run(SQL`INSERT INTO daytrack (habit_id, user_id, completion_average, start_date)
                                        VALUES 
                                            ${habitId},
                                            ${userId},
                                            ${0},
                                            ${m.startOf('isoWeek')}
                                        ;`);
                resolve (habitData.rows[0]);
            } catch (err) {
                reject('New weektrack habit could not be created')
            }
        })
    }
}

module.exports = Weektrack;