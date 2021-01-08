const SQL = require("sql-template-strings");
const db = require('../dbconfig');

class User {
    constructor(data){
        this.username = data.username,
        this.passwordDigest = data.passwordDigest
    }

    static create({ username, password }){
        return new Promise(async (res, rej) => {
            //check if username already exists
            try {
                let result = await db.run(SQL`INSERT INTO users (username, password_digest)
                                                VALUES (${username}, ${password}) RETURNING *;`);
                let user = new User(result.rows[0]);
                res(user)
            } catch (err) {
                rej(`Error creating user: ${err}`)
            }
        })
    }

    static findByUsername(username){
        return new Promise(async (res, rej) => {
            try {
                let result = await db.run(SQL`SELECT * FROM users
                                                WHERE username = ${username};`);
                let user = new User(result.rows[0])
                res(user)
            } catch (err) {
                rej(`Error retrieving user: ${err}`)
            }
        })
    }
}

module.exports = User;