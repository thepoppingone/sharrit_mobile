import React, { Component } from 'react';
import {
  // StyleSheet,
  Text,
  // TextInput,
  // TouchableOpacity,
  View,
  // Platform,
  // Alert,
} from 'react-native';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
    };
  }

  render() {
    return (
      <View><Text>Login</Text></View>
    );
  }
}
