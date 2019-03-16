import React, { Component } from 'react';
import './App.css';

class TestComponent extends Component {  
  render() {
    return (
      <div>
        <p>段落１</p>
        <p>段落２</p>
      </div>
    );
  }
}

class App extends Component {  
  render() {
    return (
      <TestComponent />
    );
  }
}

export default App;