import userServices from '../services/userServices';

const FETCH_APPOINTMENTS = 'FETCH_APPOINTMENTS';
const CREATE_APPOINTMENTS = 'CREATE_APPOINTMENTS';
const DELETE_APPOINTMENTS = 'DELETE_APPOINTMENTS';

const initialState = { appointments: [] };

export const getAppointments = () => async (dispatch) => {
  const result = await userServices.getAllAppointments();
  return dispatch({
    type: FETCH_APPOINTMENTS,
    payload: result,
  });
};

// export const createAppointment = () => async (dispatch) => {
//   try {
//     const response = await fetch('http://localhost:3000/api/v1/reservations', {
//       credentials: 'include',
//     });
//     const result = await response.json();
//     dispatch({ type: CREATE_APPOINTMENTS, payload: result });
//     console.log(result)
//   } catch (error) {
//     console.log(error);
//   }
// };

export const deleteAppointment = (id) => async (dispatch) => {
  await userServices.deleteAppointment(id);
  return dispatch({
    type: DELETE_APPOINTMENTS,
    payload: id,
  });
};

const appointmentReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_APPOINTMENTS:
      return { ...state, appointments: payload };
    case CREATE_APPOINTMENTS:
      return payload;
    case DELETE_APPOINTMENTS:
      return {
        ...state,
        appointments: [
          ...state.appointments.filter((appointment) => appointment.id !== payload),
        ],
      };
    default:
      return state;
  }
};

export default appointmentReducer;
