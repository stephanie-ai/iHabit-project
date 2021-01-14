import React, { Component } from 'react';
// import '../../styles/index.css'
import { Line } from '@reactchartjs/react-chart.js'

class Statistics extends Component {

    state = {
        dailyDate: [],
        weeklyDate: [],
        data: {
            labels: ["1","2","3"],
            datasets: [
                {
                    label: "Videos made",
                    backgroundColor: "rgba(255,0,255, 0.75)",
                    data: [2,5,7]
                },
                {
                    label: "Subscriptions",
                    backgroundColor: "rgba(0, 0, 255, 0.75)",
                    data: [20,15,3]
                }
            ]
        }
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

        setGradientColor = (canvas, color) => {
        const ctx =  canvas.getContext('2d');
        const gradient = ctx.createLinerGradient(0, 0, 600, 550)
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.95, "rgba(133, 122, 144, 0.5)");
        return gradient;
    }

    getChartData = canvas => {
        const data = this.state.data
        if (data.datasets){
            let colors = ["rgba(255,0,255, 0.75)", "rgba(0,255,0, 0.75)",]
            data.datasets.forEach((set ,i) => {
                set.backgroundColor = this.setGradientColor(canvas, colors[i]);
                set.borderColor = "white";
                set.borderWidth = 2;
            })
        }
    }

    render() {
        
        // const renderDailyData = this.state.dailyDate.map(d => (
        //     <div key={d.id}>
        //         <p>Habit: {d.habitname}</p>
        //         <p>Number To Complete{d.completion}</p>
        //         <p>Today{d.day}</p>
        //         <p>Date{d.currentdate}</p>
        //         <p>Streak{d.streak}</p>
        //         <p>Continuous streak{d.streakDay}</p>
        //     </div>
        // ))

        // const renderWeeklyData = this.state.weeklyDate.map(w => (
        //     <div key={w.id}>
        //         <p>Habit: {w.habit}</p>
        //         <p>Weekly Completion Average: {w.comp_average}</p>
        //         <p>Start Date: {w.start_date}</p>
        //     </div>
        // ));

        // return (
        //     <div>
        //         <h2> Hello from Statistics page </h2>
        //         <h3>Daily habits stats</h3>
        //         { renderDailyData }
        //         <h3>Weekly habits stats</h3>
        //         { renderWeeklyData }
        //     </div>
        // )

        const renderDailyData = this.state.dailyDate.map(d => (
            <tr key={d.id}>
                <td>{d.habitname}</td>
                <td>{d.completion}</td>
                <td>{d.day}</td>
                <td>{d.currentdate}</td>
                <td>{d.streak}</td>
                <td>{d.streakDay}</td>
            </tr>
        ))

        const renderWeeklyData = this.state.weeklyDate.map(w => (
            <tr key={w.id}>
                <td>{w.habitname}</td>
                <td>{w.comp_average}</td>
                <td>{w.start_date}</td>
            </tr>
        ));

        return (
            <div>
                <div>
                    <table>
                        <caption id ="daily">Daily</caption>
                        <thead>
                            <tr>
                                <th>Habit</th>
                                <th>Number To Complete</th>
                                <th>Today</th>
                                <th>Date</th>
                                <th>Streak</th>
                                <th>Continuous Streak</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderDailyData}
                        </tbody>
                    </table>
                    <Line 
            options={{
                responsive: true
            }}
            data={this.state.data}
            />
                </div>
                <div>
                    <table>
                        <caption id="weekly">Weekly</caption>
                        <thead>
                            <tr>
                                <th>Habit</th>
                                <th>Weekly Completion Average</th>
                                <th>Start Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderWeeklyData}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }   
}

export default Statistics;