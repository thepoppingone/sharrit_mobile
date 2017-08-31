import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Alert
} from 'react-native';
import PhoneVerifierScreen from './components/PhoneVerifierScreen';

export default class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return(
      <PhoneVerifierScreen />
    );
  }
}
