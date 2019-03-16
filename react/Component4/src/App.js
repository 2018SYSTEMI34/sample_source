import React, { Component } from 'react';
import './App.css';

class TestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0}
  }
  add() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <p>state:{this.state.count}</p>
        <button onClick={(event) => this.add(event)} >ボタン</button>
      </div>
    );
  }
}

class App extends Component {  
  render() {
    return (
      <div>
        <TestComponent />
      </div>
    );
  }
}

export default App;