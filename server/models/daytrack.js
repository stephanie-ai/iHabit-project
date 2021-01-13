const SQL = require("sql-template-strings");
const db = require('../db/config');

const moment = require('moment');
const Habit = require("./habit");
const e = require("express");


class Daytrack {
    constructor(data){
        this.id = data.id;
        this.habit = data.habit_id;
        this.user = data.user_id;
        this.completion = data.completion;
        this.day = data.day;
        this.currentdate = data.currentdate;
        this.streak = data.streak;
        this.streakDay = data.streak_day;
    }

    static all(id){
        return new Promise (async (resolve, reject) => {
            try {
                const todate = moment().format().toString();
                const result = await db.run(SQL`SELECT * FROM daytrack 
                                                    WHERE user_id = ${id}
                                                    AND
                                                    currentdate = ${todate};`);
                
                const dailyhabits = result.rows.map(a => new Daytrack(a));
                let data;
                
                if(dailyhabits.length === 0){
                    data = await Daytrack.createNewDay(id);
                }else{
                    data = dailyhabits
                }
                
                resolve(data);
            }catch(err){
                reject('daily habits could not be found.')
            }
        })
    }

    // Create Habit for new day
    static createNewDay(id){
        return new Promise (async (resolve, reject) => {
            try{
                let allHabits = await db.run(SQL`SELECT * FROM habits WHERE user_id = ${id};`);
                
                let enterHabit = await allHabits.rows.map(async h => await Daytrack.createNewHabit(h.id, h.user_id, h.daily_track));
                

                resolve(enterHabit);
            }catch(err){
                reject('could not create todays habits');
            }
        })
    };

    

    static findById(id) {
        return new Promise (async (resolve, reject) => {
            try {
                let dailyHabitData = await db.run(SQL`SELECT * FROM daytrack WHERE habit_id = ${id};`);
                let dailyHabit = new Daytrack(dailyHabitData.rows[0]);
                
                console.log('solution ahoy');
                
                resolve(dailyHabit); 
            } catch (err) {
                reject("Daily habit has not been found");
            }
        })
    };

    static findUserAndHabit(userid, habitid){
        return new Promise(async (resolve, reject) => {
            try{
                const habit = await db.run(SQL`SELECT * FROM daytrack 
                                            WHERE 
                                                user_id = ${userid} 
                                            AND habit_id = ${habitid};`);
                const foundHabit = new Daytrack(habit.rows[0]);
                resolve(foundHabit);
            }catch(err){
                reject(`Habitid ${habitid} with userid ${userid} could not be found`);
            }
        })
    };

    didHabit(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const habit = await db.run(SQL`UPDATE daytrack SET completion= completion-1
                                                WHERE id = ${id};`);
                resolve('update completed');
            } catch (err) {
                reject('Habit has not been completed');
            }
        })
    };

    completeHabit(id) {
        return new Promise(async (res, rej) => {
            try {
                const habit = await db.run(SQL`UPDATE daytrack SET streak = TRUE, streak_day = streak_day + 1 
                WHERE id = ${id};`)
                res('Streak set');
            } catch (err) {
                rej('Streak has not been set')
            }
        })
    }
    
    // weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    // weekdays[Date.getDay()]

    // static prevDay(user, habit){
    //     return new Promise (async (resolve, reject) => {
    //         try{
    //             const prevDate = moment().format('YYYY-MM-DD');
    //             const jointable = await db.run(SQL`SELECT habits.habit, daytrack.user_id, daytrack.currentdate FROM daytrack
    //                                                 INNER JOIN habits
    //                                                     ON habits.user_id = daytrack.user_id
    //                                                     WHERE habits.habit = ${habit}
    //                                                     AND daytrack.currentdate < ${prevDate}`);
                
    //             console.log(jointable.rows);

    //             const lastHabitid = await db.run(SQL`SELECT * FROM habits WHERE habit = ${habit} AND user_id = ${user} ORDER BY habit DESC LIMIT 2;`);
                
    //             let habitid = lastHabitid.rows[1].id;
    //             //I increased the limit to 2 and picked the second val because the first one might be the one being created right now.
    //             //console.log(habitid);

    //             let result = await db.run(SQL`SELECT * FROM daytrack WHERE (user_id = ${user}) AND (habit_id < ${habitid}) ORDER BY currentdate DESC LIMIT 1;`);
    //             //if you change the habitid NOT CAPITAL Id to 2 it will work.
    //             //console.log(result)
    //             let data= {
    //                 streak: null,
    //                 streak_day: null}
    //             if(result.rowCount > 0){
    //                 data.streak = result.rows[0].streak;
    //                 data.streak_day = result.rows[0].streak_day;
    //             }else {
    //                 data.streak = FALSE;
    //                 data.streak_day = 0;
    //             }

    //             //console.log(result.rows[0].currentdate, prevDate);
    //             resolve(data);
    //         }catch(err){
    //             reject('yestardays data could not be found')
    //         }
    //     })
    // }
    
    static createNewHabit(habitId, userId, dailyNum, habit) {
        return new Promise (async (resolve, reject) => {
            try {
                const date= moment().format().toString();
                //console.log('line 145', date);
                const day = new Date().toDateString().slice(0,4);

                // let streak = await Daytrack.prevDay(userId, habit);

                //console.log('2');
                
                //console.log('line 151', streak);
                let habitData = await db.run(SQL`INSERT INTO daytrack (habit_id, user_id, completion, day, currentdate, streak, streak_day)
                                                    VALUES (
                                                        ${habitId},
                                                        ${userId},
                                                        ${dailyNum},
                                                        ${day},
                                                        ${date},
                                                        FALSE,
                                                        0) RETURNING *;`);
                //console.log("end line");
                // let newDayHabit = new Daytrack(habitData.rows[0]);
                // resolve(newDayHabit);
                resolve (habitData.rows[0]);
            } catch(err) {
                reject ('New daytrack habit couldnt be created')
            }
        })
    };

    // function that checks streak based on previous day, select everything from daytrack table

    destroy(id){
        return new Promise( async(resolve, reject)=> {
            try{
                const result = await db.run(SQL`DELETE FROM daytrack WHERE id = ${id};`);
                resolve('Daily habit has been deleted');
            }catch(err){
                reject('Daily habit could not be deleted')
            }
        })
    };


}

module.exports = Daytrack