import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { mobileNumChanged, passwordChanged, loginUser, signUpUser } from '../actions';
import { Card, CardSection, Input, Button, CenterHeading } from './common';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
    };
  }

  onMobileNumChanged = (num) => {
    this.props.mobileNumChanged(num);
  }

  onPasswordChange = (text) => {
    this.props.passwordChanged(text);
  }

  onLoginPressed = () => {
    const { mobileNum, password } = this.props;
    this.props.loginUser({ mobileNum, password });
  }

  onSignupPressed = () => {
    const { mobileNum, password } = this.props;
    this.props.signUpUser({ mobileNum, password });
  }

  render() {
    return (
      <View>
        <CenterHeading>
          Welcome to Sharrit
        </CenterHeading>
        <Card>
          <CardSection>
            <Input
              label="Mobile #:"
              placeholder="88888888"
              onChangeText={this.onMobileNumChanged}
              value={this.props.mobileNum}
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password"
              onChangeText={this.onPasswordChange}
              value={this.props.password}
            />
          </CardSection>

          <CardSection>
            <Button onPress={this.onLoginPressed}>
            Login
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={this.onSignupPressed}>
            Sign Up
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  mobileNum: state.auth.mobileNum,
  password: state.auth.password,
});

export default connect(mapStateToProps, { mobileNumChanged, passwordChanged, loginUser, signUpUser })(LoginScreen);
