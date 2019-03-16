import React, { Component } from 'react';
import './App.css';

class TestComponent extends Component {  
  render() {
    return (
        <p>
          propsの値は「{this.props.propsName}」です。
        </p>
    );
  }
}

class App extends Component {  
  render() {
    return (
      <div>
        <TestComponent propsName="テスト" />
      </div>
    );
  }
}

export default App;