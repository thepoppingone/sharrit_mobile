import { Actions } from 'react-native-router-flux';
import { MOBILE_NUM_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, SIGN_UP_SUCCESS, VERIFIED_SUCCESS } from './types';

export const mobileNumChanged = num => ({
  type: MOBILE_NUM_CHANGED,
  payload: num,
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text,
});

export const loginUser = ({ mobileNum, password }) => (dispatch) => {
  // log in call

  // promise returns true
  // dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
  Actions.main();
};

export const signUpUser = ({ mobileNum, password }) => (dispatch) => {
  // sign up call

  // promise returns true
  // dispatch({ type: SIGN_UP_SUCCESS, payload: user });
  Actions.verifier();
};

export const verifyUser = ({ code }) => (dispatch) => {
  // sign up call

  // promise returns true
  // dispatch({ type: VERIFIED_SUCCESS, payload: user });
  Actions.login();
};
