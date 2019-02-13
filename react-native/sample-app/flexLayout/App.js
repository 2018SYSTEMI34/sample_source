/**
 * Sample React Native App
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends Component {
  render() {
    return (
      <View style={styles.base}>
        <Header
          centerComponent={{ text: 'FlexLayout', style: styles.header }}
          outerContainerStyles={{ height: 100, backgroundColor: '#dd0000' }} />
        <View style={styles.container}>
          <View style={styles.view1} />
          <View style={styles.view2} />
          <View style={styles.view3} >
            <View style={styles.view4} />
            <View style={styles.view4} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1
  },
  header: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: '#eeffee',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'red'
  },
  view1: {
    flex: 1,
    margin: 5,
    backgroundColor: '#6666aa',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'black'
  },
  view2: {
    flex: 2,
    margin: 5,
    backgroundColor: '#9999cc',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'black'
  },
  view3: {
    flex: 3,
    flexDirection: 'row',
    margin: 0,
  },
  view4: {
    flex: 1,
    margin: 5,
    backgroundColor: '#ccccff',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'black'
  },
});
