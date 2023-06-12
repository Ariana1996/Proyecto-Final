import { loginTypes } from '../types/login.type';

const { LOGIN, REGISTER, LOGOUT } = loginTypes;

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
    case LOGOUT:
      return { ...state, token: null, userId: null };
    default:
      return state;
  }
};

export default loginReducer;
