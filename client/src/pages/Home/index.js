import React, { Component } from 'react';
import { Login, Register } from '../../components';
// import { Link } from 'react-router-dom';
import './style.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isLogginActive: true
        };
    }

    handleChange = () => {

    }

    render() {
        const { isLogginActive } = this.state;
        const current = isLogginActive ? "Register" : "Login";
        const currentActive = isLogginActive ? "login" : "register";
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
            <div>
                    <button onClick={this.handleChange}>Login or Register</button>
                </div>

                {isLogginActive && (
                <Login current={current} currentActive={currentActive}  />
                )}
                {!isLogginActive && (
                <Register />
                )}
            </div>
             {/* onClick={this.changeState.bind} */}
            </div>
        </div>
        </div>
    );

        // return (
        //     <div>
        //         <div id="homeLeft" className="home">
        //             <div className="centered">
        //                 <h1>Welcome to iHabit</h1>
        //                 <p>Keep track of your habits here on a daily or weekly basis.</p>
        //             </div>
        //         </div>
        //         <div id="homeRight" className="home">
        //             <div className="centered">
        //             {/* <Login /> */}
        //             {/* <Route exact path='/login' component={Login} /> 
        //             <Route path='/register' component={Register} /> */}
                        
        //             <button onClick={this.login}>Login</button>
        //             <button>Register</button>
        //             <br></br>
        //             <Link to='/login' >Login</Link>
        //             <Link to='/register' >Register</Link>
        //         </div>
        //         </div>
        //     </div>
        // )
    }
}

export default Home;