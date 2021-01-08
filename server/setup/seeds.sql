DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username VARCHAR(50),
    password_digest VARCHAR(500) NOT NULL
)

DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    habit VARCHAR(100) NOT NULL, 
    weekly_track INT,
    daily_track INT,
    user_id INT
)

DROP TABLE IF EXISTS daytrack;


CREATE TABLE daytrack (
    id serial PRIMARY KEY,
    habit VARCHAR(100) NOT NULL,
    completion INT,
    day DATE,
    currentdate DATE,
    streak BOOLEAN,
    streak_day INT
)

DROP TABLE IF EXISTS weektrack;

CREATE TABLE weektrack (
    id serial PRIMARY KEY,
    habit VARCHAR(100) NOT NULL,
    mon INT,
    tue INT,
    wed INT,
    thu INT,
    fri INT,
    sat INT,
    sun INT,
    completion_average INT,
    start_date DATE
)