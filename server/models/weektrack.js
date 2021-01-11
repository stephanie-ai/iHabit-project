const SQL = require("sql-template-strings");
const db = require('../db/config');

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
                resolve(weeklyhabits)
            }catch(err){
                reject("Users habits could not be found for this week.")
            }
        })
    }
}
module.exports = Weektrack