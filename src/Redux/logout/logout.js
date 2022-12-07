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
    console.log(error);
  }
};

export const logout = async () => {
  fetch('http://localhost:3000/logout', {
    credentials: 'include',
    method: 'DELETE',
    type: LOGOUT_STATUS,
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};




export const loginReducer = (state = {}, action) => {
  if (action.type === LOGIN_STATUS) {
    return action.payload;
  }
if (action.type === LOGOUT_STATUS){
     
}
  return state;
};

export const logOutReducer = (state = {}, action) => {
  if (action.type === LOGIN_STATUS) {
    return action.payload;
  }
if (action.type === LOGOUT_STATUS){
     
}
  return state;
};
