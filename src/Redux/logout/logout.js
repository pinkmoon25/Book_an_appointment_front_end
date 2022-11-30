const LOGIN_STATUS = 'LOGIN_STATUS';

export const checkLoginStatus = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/logged_in', {
      credentials: 'include',
    });

    const result = await response.json();
    dispatch({ type: LOGIN_STATUS, payload: result });
  } catch (error) {
    console.log(error);
  }
};

export const loginReducer = (state = {}, action) => {
  if (action.type === LOGIN_STATUS) {
    return action.payload;
  }
  return state;
};
