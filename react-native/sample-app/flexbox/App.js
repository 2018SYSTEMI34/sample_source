/**
 * Sample FlexBox React Native App
 */

import React, { Component } from 'react';
import { View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
        </View>
      </View>
    );
  }
}
