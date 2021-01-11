import React from 'react';

const AddHabit = ({ habit: {habitname, body} }) => {
    console.log(habitname, body);
    return (
        <div className='habit'>
            <h3>{habitname}</h3>
            <p>{body}</p>
        </div>
    );
}

export default AddHabit;