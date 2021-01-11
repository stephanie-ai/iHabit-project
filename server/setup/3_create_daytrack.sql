DROP TABLE IF EXISTS daytrack;


CREATE TABLE daytrack (
    id serial PRIMARY KEY,
    habit_id INT NOT NULL,
    user_id INT NOT NULL,
    completion INT,
    day VARCHAR(15),
    currentdate DATE,
    streak BOOLEAN,
    streak_day INT
);