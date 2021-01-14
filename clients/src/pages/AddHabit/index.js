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
        //console.log(res[this.props.index]);
        if(res.err){ throw Error(res.err)}
        this.setState({count: res[this.props.index]});
    }

    completeCount = async(e)=>{
        e.preventDefault();
        const options = {
            method: 'PATCH'
        }
        const patchData = await fetch(`http://localhost:3000/daytrack/${this.props.habits.user}/${this.props.habits.id}`, options);
        //console.log(patchData)
        const res = await patchData.status;
        if (res !== 204){ throw Error(res.err) }
        this.getnum();
    }

    deleteHabit = (e, id) => {
        const options = {
            method: 'DELETE'
        }
        // use the user id and the habit to find then delete
        fetch(`http://localhost:3000/habit/${id}`, options)
            .then(fetchHabits)
            .catch(err => console.warn(err));
        
        //do the if statement to check for errors and then re-render
    }


    render() {
        return (
            <div className='habit'>
            <h3>{this.props.habits.habit}</h3>
            <p id ='p1'>Complete per Week: {this.props.habits.weeklyNum}</p>
            <p id= 'p2'>Left for Today: {this.state.count.completion}</p>
            <button onClick={this.completeCount}>Count</button>
            <button onClick={e => deleteHabit(e, h.id)}>X</button>
        </div>
        );
    }
}

export default AddHabit;