DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    habit VARCHAR(100) NOT NULL, 
    weekly_track INT,
    daily_track INT,
    user_id INT
);