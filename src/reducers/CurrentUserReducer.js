import { MOBILE_NUM_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, SIGN_UP_SUCCESS, VERIFIED_SUCCESS } from '../actions/types';

const INITIAL_STATE = { mobileNum: '', password: '', user: null };

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case MOBILE_NUM_CHANGED: {
      return { ...state, mobileNum: action.payload };
    }
    case PASSWORD_CHANGED: {
      return { ...state, password: action.payload };
    }
    case LOGIN_USER_SUCCESS: {
      return { ...state, user: action.payload };
    }
    case SIGN_UP_SUCCESS: {
      return { ...state, sentVerificationCode: action.payload };
    }
    default:
      return state;
  }
};
