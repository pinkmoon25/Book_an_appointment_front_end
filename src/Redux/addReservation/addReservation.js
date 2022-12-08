const CREATE_APPOINTMENTS = 'CREATE_APPOINTMENTS';

const createAppointment = (newData) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/reservations', {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...newData,
      }),
    });
    const result = await response.json();
    dispatch({ type: CREATE_APPOINTMENTS, payload: result });
  } catch (error) {
    console.error(error);
  }
};

export default createAppointment;
