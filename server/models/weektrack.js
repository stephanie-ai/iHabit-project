const SQL = require("sql-template-strings");
const db = require('../db/config');

const moment = require('moment');

class Weektrack {
    constructor(data){
        this.id = data.id
        this.user = data.user_id;
        this.habit = data.habit_id;
        this.comp_average= data.completion_average;
        this.start_date = data.start_date;
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
    };

    static findById(id) {
        return new Promise (async (resolve, reject) => {
            try {
                let weeklyHabitData = await db.run(SQL`SELECT * FROM weektrack WHERE habit_id = ${id};`);
                let weeklyHabit = new Weektrack(weeklyHabitData.rows[0]);
                resolve(weeklyHabit); 
            } catch (err) {
                reject("Weekly habit has not been found");
            }
        })
    };


    static createNewHabit(habitId, userId){
        return new Promise (async (resolve, reject) => {
            try {
                const startDate = moment().startOf("isoWeek").toString();
                // console.log(startDate);
                const habitData = await db.run(SQL`INSERT INTO weektrack (habit_id, user_id, completion_average, start_date)
                                        VALUES (
                                            ${habitId},
                                            ${userId},
                                            0,
                                            ${startDate}
                                        ) RETURNING *;`);
                resolve (habitData.rows[0]);
            } catch (err) {
                reject('New weektrack habit could not be created')
            }
        })
    };

    destroy(id){
        return new Promise( async(resolve, reject)=> {
            try{
                const result = await db.run(SQL`DELETE FROM weektrack WHERE id = ${id};`);
                resolve('weekly habit has been deleted');
            }catch(err){
                reject('weekly habit could not be deleted')
            }
        })
    };
}

module.exports = Weektrack;