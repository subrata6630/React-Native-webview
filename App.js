import React, { Component } from 'react';
import { Text, View, StyleSheet, WebView } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  render() {
    return (
        <WebView
        source={{uri: 'https://aimbook.net/'}}
        style={{marginTop:30}}
      />
    );
  }
}
