import React from 'react';

const AddHabit = ({ habit: {habitname, body} }) => {
    console.log(habitname, body);
    return (
        <div className='habit'>
            <h3>Hello from AddHabit</h3>
            {/* <h3>{habitname}</h3>
            <p>{body}</p> */}
            <div>
                <form>
                    <label htmlFor="habitName">Habit name:</label>
                    <input type="text" name="habitName" />

                    <label htmlFor="daysPerWeek">Number of days per week:</label>
                    <input type="number" name="daysPerWeek" />

                    <label htmlFor="dailyCount">How many times per day:</label>
                    <input type="number" name="dailyCount" />

                    <input type="submit" value="add habit" />
                </form>

            </div>
        </div>
    );
}

export default AddHabit;