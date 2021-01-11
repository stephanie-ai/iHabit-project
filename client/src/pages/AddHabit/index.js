import React from 'react';

const AddHabit = ({ habit: {habitname, body} }) => {
    console.log(habitname, body);
    return (
        <div className='habit'>
            <h3>Hello from AddHabit</h3>
            {/* <h3>{habitname}</h3>
            <p>{body}</p> */}
        </div>
    );
}

export default AddHabit;