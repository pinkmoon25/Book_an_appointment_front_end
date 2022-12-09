const LOGIN_STATUS = 'LOGIN_STATUS';
const LOGOUT_STATUS = 'LOGOUT_STATUS';

export const checkLoginStatus = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/logged_in', {
      credentials: 'include',
    });

    const result = await response.json();
    dispatch({ type: LOGIN_STATUS, payload: result });
  } catch (error) {
    console.error(error);
  }
};

export const logout = () => async (dispatch) => {
  const response = await fetch('http://localhost:3000/logout', {
    credentials: 'include',
    method: 'DELETE',
  });
  const result = await response.json();
  if (result.logged_out) {
    dispatch({ type: LOGOUT_STATUS });
  }
};

export const loginReducer = (state = {}, action) => {
  if (action.type === LOGIN_STATUS) {
    return action.payload;
  }

  if (action.type === LOGOUT_STATUS) {
    return {};
  }

  return state;
};
