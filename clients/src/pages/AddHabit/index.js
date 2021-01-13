import React from 'react';
// import '../../styles/index.css'

const AddHabit = (props) => {
    return (
        <div className='habit'>
            <h3>{props.habits.habit}</h3>
            <p id ='p1'>Complete per Week: {props.habits.weeklyNum}</p>
            <p id= 'p2'>Complete per Day: {props.habits.dailyNum}</p>
        </div>
    );
}

export default AddHabit;