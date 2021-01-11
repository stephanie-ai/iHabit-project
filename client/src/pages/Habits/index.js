import React, { Component } from 'react';
import { AddHabit } from '../../components';

class Habits extends Component {
    state = { habits: [] }

    componentDidMount = () => this.fetchHabits();

    fetchHabits = async () => {
        const resp = await fetch(`http://localhost:3000/allHabits`);
        const habits = await resp.json()
        this.setState({ habits })
    }
    
    render(){
        const renderHabits = this.state.posts.map((p, idx) => <AddHabit key={idx} post={p} />)
        
        return (
            <section id="habits">
                { renderHabits }
            </section>
        );
    }
}

export default Habits;