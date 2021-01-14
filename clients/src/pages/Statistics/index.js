import React, { Component } from 'react';
import '../../styles/index.css'
import { Line } from '@reactchartjs/react-chart.js'

class Statistics extends Component {

    state = {
        dailyDate: [],
        weeklyDate: [],
        data: {
            labels: [], // set as habit name
            datasets: [
                {
                    label: "Completion average",
                    backgroundColor: "rgba(255,0,255, 0.75)",
                    data: [] // set as comp average
                },
            ]
        }
    }

    componentDidMount(){
        this.dayData();
        this.weekData();
        this.getChartData;
        this.setGradientColor;
        
    }

    dayData = async () => {
        const getData = await fetch(`http://localhost:3000/daytrack/${this.props.user.userId}`);
        const res = await getData.json();
        if (res.err) { throw Error(res.err) }
        console.log("daily",res);
        this.setState({ dailyDate: res });
    };

    weekData = async () => {
        const formatedDate = "11-01-2021"
        const getData = await fetch(`http://localhost:3000/weektrack/${this.props.user.userId}/${formatedDate}`);
        console.log("date",formatedDate)
        const res = await getData.json();
        if (res.err){ throw Error(res.err) }
        
        this.setState({ weeklyDate: res});
        let result = res.map(a => a.completion_average);
        console.log("comp-average", result)
        //
        let habits = res.map(a => a.habitname);
        console.log("comp-average", habits)
        //
        console.log("test",this.state.data.datasets)

        let newState = Object.assign({}, this.state);
        newState.data.datasets[0].data = result
        newState.data.labels = habits
        console.log("newstate", newState)
        this.setState(newState)
    };

    setGradientColor = (canvas, color) => {
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 600, 550)
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
        return data;
    }

    render() { 
        
        const renderDailyData = this.state.dailyDate.map(d => (
            <tr key={d.id}>
                <td>{d.habitname}</td>
                <td>{d.completion}</td>
                <td>{d.day.toString().slice(0,10)}</td>
                <td>{d.currentdate}</td>
                <td>{d.streak_day === 0 ? "False" : "True"}</td>
                <td>{d.streak_day}</td>
            </tr>
        ))

        const renderWeeklyData = this.state.weeklyDate.map(w => (
            <tr key={w.id}>
                <td>{w.habitname}</td>
                <td>{w.completion_average}</td>
                <td>{w.start_date.toString().slice(0,10)}</td>
            </tr>
        ));

        return (
            <div>
                <div style={{ position: "relative", width: 600, height: 550 }}>
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
            data={this.getChartData}
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