/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


class Http{
  static GET(inName,inData){
    return fetch(inName, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
  }
}


export default class RnNetwork extends Component {
  state = {
    data: {
      url:'loading....'
    }
  };

  componentWillMount() {
    Http.GET('https://api.github.com/users/afeiship').then((resp)=>{
      this.setState({
        data: resp
      })
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          { JSON.stringify(this.state.data.url) }
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RnNetwork', () => RnNetwork);
