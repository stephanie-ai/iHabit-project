import React, { Component } from 'react';
import { Login, Register } from '../../components';
import './style.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoginOpen: true,
            isRegisterOpen: false
        }
    }

    showLoginBox() {
        this.setState({isLoginOpen: true, isRegisterOpen: false});
    }
    
    showRegisterBox() {
        this.setState({isRegisterOpen: true, isLoginOpen: false});
    }

    render() {
        return (
            <div>
                
                <div id="homeLeft" className="home">
                    <div className="centered">
                        <h1>Welcome to iHabit</h1>
                        <p>Keep track of your habits here on a daily or weekly basis.</p>
                    </div>
                </div>

        <div id="homeRight" className="home">
            <div  className="centered">
                <div className="container">
                    <div className="box-controller">

                        <button
                            className={"controller " + (this.state.isLoginOpen
                            ? "selected-controller"
                            : "")}
                            onClick={this.showLoginBox.bind(this)}>
                            Login
                        </button>

                        <button
                            className={"controller " + (this.state.isRegisterOpen
                            ? "selected-controller"
                            : "")}
                            onClick={this.showRegisterBox.bind(this)}>
                            Register
                        </button>
                    </div>
                    <div>
                        { this.state.isLoginOpen ? 
                        <Login login={this.props.login}/> : <Register login={this.props.login}/> }
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
    }
}

export default Home;