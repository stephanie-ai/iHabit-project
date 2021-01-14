import React from 'react';
import '../../styles/index.css'

class AddHabit extends React.Component{
    state={
        count: 0
    }

    componentDidMount(){
        this.getnum();
    }

    getnum = async () =>  {
        const getFetch = await fetch(`http://localhost:3000/daytrack/${this.props.habits.user}`);
        const res = await getFetch.json();
        const numoftimes = await res[this.props.index];
        if(res.err){ throw Error(res.err)}
        this.setState({count: numoftimes.completion});
    }

    completeCount = async(e)=>{
        e.preventDefault();

        const options = {
            method: 'PATCH'
        }
        const patchData = await fetch(`http://localhost:3000/daytrack/${this.props.habits.user}/${this.props.habits.id}`, options);
        
        const res = await patchData.status;
        if (res !== 204){ throw Error(res.err) }
        this.setState(prevState => ({ count: --prevState.count}));
    }

    deleteHabit = async (e) => {
        const options = {
            method: 'DELETE'
        }
        const del = await fetch(`http://localhost:3000/habit/${this.props.habits.id}/`, options)
        const res = await del.status;
        if (res !== 204) { throw Error(res.err) };
        this.props.fetchHabits();
    }


    render() {
        return (
            <div id='habit'>
            <h3>{this.props.habits.habit}</h3>
            <p id ='p1'>Complete per Week: {this.props.habits.weeklyNum}</p>
            <p id= 'p2'>Left for Today: {this.state.count}</p>
            <button disabled={this.state.count.completion === 0} onClick={this.completeCount}>Count</button>
            <button onClick={e => this.deleteHabit(e)}>X</button>
        </div>
        );
    }
}

export default AddHabit;