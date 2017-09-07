import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginScreen from './components/LoginScreen';
import PhoneVerifierScreen from './components/PhoneVerifierScreen';
import SignupScreen from './components/SignupScreen';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="loginFlow">
        <Scene key="login" component={LoginScreen} title="Test" initial />
        <Scene key="verifier" component={PhoneVerifierScreen} title="Please submit code" />
      </Scene>
      <Scene key="main">
        <Scene key="browse" component={SignupScreen} title="test routing" />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;
