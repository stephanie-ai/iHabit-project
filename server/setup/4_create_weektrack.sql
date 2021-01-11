DROP TABLE IF EXISTS weektrack;

CREATE TABLE weektrack (
    id serial PRIMARY KEY,
    habit_id INT NOT NULL,
    user_id INT NOT NULL,
    completion_average INT,
    start_date DATE
);