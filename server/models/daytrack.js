const SQL = require("sql-template-strings");
const db = require('../db/config');

class Daytrack {
    constructor(data){
        this.id = data.id;
        this.habit = data.habit_id;
        this.user = data.user_id;
        this.completion = data.completion;
        this.day = data.day;
        this.currentdate = data.currentdate;
        this.streak = data.streak;
        this.streakDay = data.streakDay;
    }

    static all(id){
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.run(SQL`SELECT * FROM daytrack 
                                                    WHERE user_id = ${id};`);
                const dailyhabits = result.rows.map(a => new Daytrack(a));
                resolve(dailyhabits);
            }catch(err){
                reject('daily habits could not be found.')
            }
        })
    }
    
    // weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    // weekdays[Date.getDay()]
    
    static createNewHabit(habitId, userId, dailyNum) {
        return new Promise (async (resolve, reject) => {
            try {
                const date= (new Date().toLocaleDateString("en-DK")).toString();
                const day = new Date().toDateString().slice(0,4);
                console.log(date, day);
                let habitData = await db.run(SQL`INSERT INTO daytrack (habit_id, user_id, completion, day, currentdate, streak, streak_day)
                                                    VALUES (
                                                        ${habitId},
                                                        ${userId},
                                                        ${dailyNum},
                                                        ${day},
                                                        ${date},
                                                        FALSE,
                                                        0) RETURNING *;`);
                console.log("end line");
                // let newDayHabit = new Daytrack(habitData.rows[0]);
                // resolve(newDayHabit);
                resolve (habitData.rows[0]);
            } catch(err) {
                reject ('New daytrack habit couldnt be created')
            }
        })
    }
}
module.exports = Daytrack