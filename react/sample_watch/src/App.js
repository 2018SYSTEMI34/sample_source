/*
 * 現在の日付と時間を表示するアプリ
*/

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  //stateの初期化
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  
  //コンポーネントがマウントされたときに実行される
    componentDidMount(){
    this.timerID = setInterval(
      () => this.clock(),
      //1秒間隔で実行されるように設定
      1000
    );
  }
  
  //日付の更新
  clock() {
    this.setState({
      date: new Date()
    });
  }
  
  render() {
    return (
      <div className="main">
        <p>現在の日付</p>
        <p> {this.state.date.toLocaleDateString()}.</p>
        <p>現在の時刻</p>
        <p> {this.state.date.toLocaleTimeString()}.</p>
      </div>
    );
  }
}

export default App;
