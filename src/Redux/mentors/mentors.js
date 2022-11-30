import userServices from '../services/userServices';

const FETCH_MENTORS = '';

const initialState = [];

export const getMentors = () => async (dispatch) => {
  const result = await userServices.fetchMentors();
  return dispatch({
    type: FETCH_MENTORS,
    payload: result,
  });
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

export default mentorsReducer