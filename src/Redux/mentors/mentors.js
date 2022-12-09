const FETCH_MENTORS = 'FETCH_MENTORS';

const initialState = [];

export const getMentors = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/mentors', {
      credentials: 'include',
    });
    const result = await response.json();
    dispatch({ type: FETCH_MENTORS, payload: result });
  } catch (error) {
    console.error(error);
  }
};

const mentorsReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case FETCH_MENTORS:
      return payload;
    default:
      return state;
  }
};

export default mentorsReducer;
