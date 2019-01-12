/**
 * Sample React Native App
 * ボタンを押下後にAlertを表示する簡単なアプリです。
 * React Native APIsの理解を深めるために作成しました。
 */
import React, { Component } from 'react';
import { StyleSheet, Alert, View, Button, Text } from 'react-native';

/**
 * 画面にボタンを表示させて、Alertを表示させるアプリです。
 */
export default class App extends Component {
  constructor(props) {
    super(props);
    // text Alertでボタンを押下した結果を表示するテキスト
    this.state = {
      text: null,
    }

    // function bind
    this.confirmAlert = this.confirmAlert.bind(this);
  }

  // Alertを表示させる関数
  confirmAlert = () => {
    // react-native apisの使用
    Alert.alert(
      "Sample Alert",
      "Hello World!",
      [
        { text: "OK", onPress: () => this.setState({ text: "pressed OK" }) },
        { text: "Cancel", onPress: () => this.setState({ text: "pressed Cancel" }) }
      ]
    )

  }
  render() {
    return (
      <View style={styles.container}>
        <Button title="alert" color="#33CCFF" onPress={this.confirmAlert} />
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

// style定義
// 今回のサンプルでは自動生成されたものを
// そのまま使用しています。
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
