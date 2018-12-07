import React, { Component } from 'react';
import User from './components/User';
import TextBlock from './components/TextBlock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <User/>
        <TextBlock/>
      </div>
    );
  }
}

export default App;
