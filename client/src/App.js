import React, { Component } from 'react';
import Home from './pages/Home';

class App extends Component {
    render() {
      return (
          <main>
              <h1>Welcome to iHabit</h1>
              <p>Keep track of your habits here on a daily or weekly basis.</p>
              <Home />
          </main>
      )
    }
  }

export default App;