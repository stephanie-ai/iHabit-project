import React, { Component } from 'react';
import Login from '../../components/Login';
// import Register from '../../components/Register';

class Home extends Component {
    render() {
        return (
            <div>
                <h3>Hey there</h3>
                <Login />
                {/* <Register /> */}
            </div>
        )
    }
}

export default Home;