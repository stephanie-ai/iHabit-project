import React, { Component } from 'react';
import Login from '../../components/Login';

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Welcome to iHabit</h1>
                    <p>Keep track of your habits here on a daily or weekly basis.</p>
                </div>
                <div>
                    <Login />
                </div>

            </div>
        )
    }
}

export default Home;