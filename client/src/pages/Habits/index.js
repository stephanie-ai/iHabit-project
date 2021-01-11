import React, { Component } from 'react';
// import { AddHabit } from './AddHabit';
import './style.css';

class Habits extends Component {
    // state = { habits: [] }

    // componentDidMount = () => this.fetchHabits();

    // fetchHabits = async () => {
    //     const resp = await fetch(`http://localhost:3000/habits`);
    //     const habits = await resp.json()
    //     this.setState({ habits })
    // }
    
    render(){
        // const renderHabits = this.state.habits.map((p, idx) => <AddHabit key={idx} habits={p} />)
        
        return (
            <section id="habits">
                <h3>Hello from habits page</h3>
                <button id="plushabit">+</button>
                {/* { renderHabits } */}
            </section>
        );
    }
}

export default Habits;