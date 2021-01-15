import React, { Component } from 'react';
import AddHabit from '../AddHabit';
import './style.css';
import '../../styles/index.css'

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
        const habits = await resp.json();
        if (habits.err){ throw Error(habits.err) }
        this.setState({ habits })
    }

    habitForm = () =>{
        this.setState(prevState => ({ enterHabit: !prevState.enterHabit}));
    }

    createHabit = async (e) =>{
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                habit: e.target.habitName.value,
                user: this.props.user.userId,
                weeklyNum: e.target.daysPerWeek.value,
                dailyNum: e.target.dailyCount.value
            })
        }
        const sendData = await fetch(`http://localhost:3000/habit/`, options);
        const res = await sendData.json();
        if (res.err){ throw Error(res.err) }
        this.fetchHabits();
    }
    
    render(){
        const renderHabits = this.state.habits.map((p, idx) => <AddHabit key={idx} habits={p} index={idx} fetchHabits={this.fetchHabits}/>)
        const newhabit = (<div id = 'newhabit'>
                <form id="newhabitForm" onSubmit={this.createHabit}>
                    <label htmlFor="habitName">Habit name:</label>
                    <input type="text" name="habitName" />

                    <label htmlFor="daysPerWeek">Number of days per week:</label>
                    <input type="number" name="daysPerWeek" min="0" max="20" />

                    <label htmlFor="dailyCount">How many times per day:</label>
                    <input type="number" name="dailyCount" min="0" max="20" />

                    <input type="submit" value="add habit" />
                </form>
            </div>)
        
        return (
            <section id="habits">
                <div id='top'>
                <button id="plushabit" onClick={this.habitForm}>+</button>
                { this.state.enterHabit ? newhabit : null }
                <h1>Your habits:</h1>
                </div>
                { renderHabits }
            </section>
        );
    }
}

export default Habits;