import React, { Component } from 'react';
//import '../../styles/index.css'

class Statistics extends Component {

    state = {
        dailyDate: [],
        weeklyDate: []
    }

    componentDidMount(){
        this.dayData();
        this.weekData();
    }

    dayData = async () => {
        const getData = await fetch(`http://localhost:3000/daytrack/${this.props.user.userId}`);
        const res = await getData.json();
        if (res.err) { throw Error(res.err) }
        //console.log(res);
        this.setState({ dailyDate: res });
    };

    weekData = async () => {
        const formatedDate = "11-01-2021"
        const getData = await fetch(`http://localhost:3000/weektrack/${this.props.user.userId}/${formatedDate}`);
        const res = await getData.json();
        if (res.err){ throw Error(res.err) }
        console.log(res);
        this.setState({ weeklyDate: res});
    };

render() {
    
    const renderDailyData = this.state.dailyDate.map(d => (
        <div key={d.id}>
            <p>Habit: {d.habit}</p>
            <p>Number left Complete{d.completion}</p>
            <p>Today{d.day}</p>
            <p>Date{d.currentdate}</p>
            <p>Streak{d.streak}</p>
            <p>Continuous streak{d.streakDay}</p>
        </div>
    ))

    const renderWeeklyData = this.state.weeklyDate.map(w => (
        <div key={w.id}>
            <p>Habit: {w.habit}</p>
            <p>Weekly Completion Average: {w.comp_average}</p>
            <p>Start Date: {w.start_date}</p>
        </div>
    ))

    return (
        <div>
            <h2> Hello from Statistics page </h2>
            <h3 id ="daily">Daily habits stats</h3>
            { renderDailyData }
            <h3 id="weekly">Weekly habits stats</h3>
            { renderWeeklyData }
        </div>
        )
    }
}   

export default Statistics;