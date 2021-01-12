/*enter, trainer*/
INSERT INTO users (username, password_digest)
VALUES
    ('bob', '$2b$10$Gfy1j62d3YxVg50j9rWjLuRYWQYs2AE8ZEqdyHp/.SPFX3DRaixNu'),
    ('gary', '$2b$10$31E0whjhg1d1rKNj0MC6OO.F0pJSYTbF1QcYxyGJol1p9v8wkLxgO');

INSERT INTO habits (habit, weekly_track, daily_track, user_id)
VALUES
    ('drink water', 7, 5, 1),
    ('drink water', 7, 5, 2),
    ('exercise', 4, 1, 2);

INSERT INTO daytrack (habit_id, user_id, completion, day, currentdate, streak, streak_day)
VALUES
    (1, 1, 0, 'MON', '11/01/2021', FALSE, 0),
    (2, 2, 1, 'MON', '11/01/2021', FALSE, 0),
    (3, 2, 1, 'MON', '11/01/2021', FALSE, 0);


INSERT INTO weektrack (habit_id, user_id, completion_average, start_date)
VALUES
    (1, 1, 0, '11/01/2021'),
    (2, 2, 1, '11/01/2021'),
    (3, 2, 1, '11/01/2021');

/*DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username VARCHAR(255),
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
    habit_id INT NOT NULL,
    completion INT,
    day DATE,
    currentdate DATE,
    streak BOOLEAN,
    streak_day INT
)

DROP TABLE IF EXISTS weektrack;

CREATE TABLE weektrack (
    id serial PRIMARY KEY,
    habit_id INT NOT NULL,
    mon INT,
    tue INT,
    wed INT,
    thu INT,
    fri INT,
    sat INT,
    sun INT,
    completion_average INT,
    start_date DATE,
    user_id INT NOT NULL
)*/