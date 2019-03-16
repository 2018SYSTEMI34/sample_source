import React, { Component } from 'react';
import './App.css';

class ChildComponent extends Component {  
  render() {
    return (
        <p>子コンポーネント</p>
    );
  }
}

class App extends Component {  
  render() {
    return (
      <div>
        <ChildComponent />
        <ChildComponent />
      </div>
    );
  }
}

export default App;