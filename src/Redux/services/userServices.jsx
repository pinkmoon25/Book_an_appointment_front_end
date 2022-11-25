import jwt_decode from 'jwt-decode';
import fetchApi from './fetchApi';

import {
  BASE_URL,
  SIGNUP_URL,
  LOGIN_URL,
  LOGOUT,
} from './rootEndpoints';

const register = async (params) => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${SIGNUP_URL}`, params);
    return result;
  } catch (err) {
    return err;
  }
};

const login = async (params) => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${LOGIN_URL}`, params);
    if (result.status === 200) {
      localStorage.setItem('jwt-token', result.token);
    }
    return result;
  } catch (err) {
    return err;
  }
};

const logout = async () => {
  try {
    const result = await fetchApi.remove(`${BASE_URL}/${LOGOUT}`);
    return result;
  } catch (err) {
    return err;
  }
};

const userServices = {
  register,
  login,
  logout,
};

export default userServices;