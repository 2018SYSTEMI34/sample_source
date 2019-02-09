/**
 * Sample Layout React Native App
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {StatusBar, View,Text} from 'react-native';
import {Header} from 'react-native-elements';

export default class App extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle='light-content'/>
        <Header centerComponent={{ text: 'Layout', style: { color: '#fff' } }} />
        <Text>アプリ本体</Text>
      </View>
    );
  }
}
