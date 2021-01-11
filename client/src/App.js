import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Home, Habits } from './pages';
import { NavBar, Login, LoggedOutRoute, Register, PrivateRoute } from './components';

class App extends Component {
    state = {
        isLoggedIn: true, // must change back to false
        currentUser: {}
    }

    // login = async (userData) => {
    //     try {
    //         const options = {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(userData)
    //         }
    //         const r = await fetch(`http://localhost:3000/auth/login`, options)
    //         const data = await r.json()
    //         if (data.err){ throw Error(data.err) }
    //         this.setState({ isLoggedIn: true, currentUser: data.user })
    //         this.props.history.push('./feed')
    //     } catch (err) {
    //         console.warn(`Error: ${err}`);
    //     }
    // }

    logout = () => {
        this.setState({ isLoggedIn: false })
        this.props.history.push('/')
    }

    render() {
      return (
          <main>
              <NavBar isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
              <h1>Welcome to iHabit</h1>
              <p>Keep track of your habits here on a daily or weekly basis.</p>
              <Switch>
                  <Route exact path='/' component={Home} />
                  {/* <Route exact path='/habits' component={Habits} /> */}
                  {/* <Route path='/addhabit' component={AddHabit} /> */}
                  <LoggedOutRoute path='/login' isLoggedIn={this.state.isLoggedIn} login={this.login} component={Login} />
                  <LoggedOutRoute path='/register' isLoggedIn={this.state.isLoggedIn} login={this.login} component={Register} /> 
                  <PrivateRoute path='/habits' isLoggedIn={this.state.isLoggedIn} component={Habits} />
              </Switch>
          </main>
      )
    }
}

export default withRouter(App);