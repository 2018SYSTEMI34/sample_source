/**
 * Sample React Native App
 * 「watch」
 * 画面中央に時刻を表示するサンプル
 * 
 * stateを活用するのが目的
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)


    this.state = {
      time : null,
    }
    // 1秒ごとに起動する関数
    setInterval(() => {
      // 現在時刻の取得
      const now = new Date();
      // stateの更新
      this.setState({time :`${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}` })
    },1000)

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.time}>{this.state.time}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  time: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
