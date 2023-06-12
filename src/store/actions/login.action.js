import { FIREBASE_AUTH_SIGN_UP_URL, FIREBASE_AUTH_SIGN_IN_URL } from '../../constants';
import { loginTypes } from '../types';

const { LOGIN, REGISTER, LOGOUT } = loginTypes;

export const register = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const response = await fetch(FIREBASE_AUTH_SIGN_UP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al registrarse');
      }

      const data = await response.json();

      dispatch({
        type: REGISTER,
        token: data.idToken,
        userId: data.localId,
      });
      console.warn('usuario registrado');
    } catch (error) {
      throw error;
    }
  };
};

export const login = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const response = await fetch(FIREBASE_AUTH_SIGN_IN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.warn(data.error.message);
      }

      dispatch({
        type: LOGIN,
        token: data.idToken,
        userId: data.localId,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch({
      type: LOGOUT,
      token: null,
      userId: null,
    });
  };
};
