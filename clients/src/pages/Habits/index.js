import React, { Component } from 'react';
import AddHabit from '../AddHabit';
import './style.css';

class Habits extends Component {
    state = { 
        habits: [],
        enterHabit: false
     }

    componentDidMount(){
        this.fetchHabits();
    }

    fetchHabits = async () => {
        const resp = await fetch(`http://localhost:3000/habit/${this.props.user.userId}`);
        const habits = await resp.json()
        this.setState({ habits })
    }

    habitForm = () =>{
        this.setState(prevState => ({ enterHabit: !prevState.enterHabit}));
    }
    
    render(){
        const renderHabits = this.state.habits.map((p, idx) => <AddHabit key={idx} habits={p} />)
        const newhabit = (<div>
                <form>
                    <label htmlFor="habitName">Habit name:</label>
                    <input type="text" name="habitName" />

                    <label htmlFor="daysPerWeek">Number of days per week:</label>
                    <input type="number" name="daysPerWeek" />

                    <label htmlFor="dailyCount">How many times per day:</label>
                    <input type="number" name="dailyCount" />

                    <input type="submit" value="add habit" />
                </form>
            </div>)
        
        return (
            <section id="habits">
                <h3>Hello from habits page</h3>
                <button id="plushabit" onClick={this.habitForm}>+</button>
                { this.state.enterHabit ? newhabit : null }
                { renderHabits }
            </section>
        );
    }
}

export default Habits;