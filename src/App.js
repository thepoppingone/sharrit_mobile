import React, { Component } from 'react';
import LoginScreen from './components/LoginScreen';
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   Platform,
//   Alert,
// } from 'react-native';
import PhoneVerifierScreen from './components/PhoneVerifierScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  render() {
    return (
      // <PhoneVerifierScreen />
      <LoginScreen />
    );
  }
}
