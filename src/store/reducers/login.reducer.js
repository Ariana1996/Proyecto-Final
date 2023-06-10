import { loginTypes } from '../types/login.type';

const { LOGIN, REGISTER } = loginTypes;

const initialState = {
  token: null,
  userId: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return { ...state, token: action.token, userId: action.userId };
    case LOGIN:
      return { ...state, token: action.token, userId: action.userId };
    default:
      return state;
  }
};

export default loginReducer;
