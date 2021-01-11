import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
// import AddHabit from './pages/AddHabit';
// import { Habits } from './pages';

class App extends Component {
    state = {
        isLoggedIn: false,
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

    // logout = () => {
    //     this.setState({ isLoggedIn: false })
    //     this.props.history.push('/')
    // }

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
              </Switch>

              <Login />
          </main>
      )
    }
  }

export default withRouter(App);