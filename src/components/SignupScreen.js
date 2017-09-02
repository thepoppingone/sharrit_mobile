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

export default class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
    };
  }

  render() {
    return (
      <View><Text>Sign Up</Text></View>
    );
  }
}
