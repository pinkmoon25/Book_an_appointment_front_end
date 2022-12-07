const logout = async () => {
  fetch('http://localhost:3000/logout', {
    credentials: 'include',
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const fetchMentors = async () => {
  try {
    await fetch({
      url: 'http://localhost:3000/api/v1/mentors',
      credentials: 'include',
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  } catch (error) {
    return error;
  }
  return null;
};

const getAllAppointments = async () => {
  try {
    await fetch({
      url: 'http://localhost:3000/api/v1/reservations',
      credentials: 'include',
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  } catch (error) {
    return error;
  }
  return null;
};

const getAppointment = async (id) => {
  try {
    await fetch({
      url: `${'http://localhost:3000/api/v1/reservations'}/reservations/${id}`,
      credentials: 'include',
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  } catch (error) {
    return error;
  }
  return null;
};

const deleteAppointment = async (id) => {
  try {
    await fetch({
      url: `${'http://localhost:3000/api/v1/reservations'}/reservations/${id}`,
      credentials: 'include',
      method: 'REMOVE',
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  } catch (error) {
    return error;
  }
  return null;
};

const userServices = {
  logout,
  fetchMentors,
  getAppointment,
  deleteAppointment,
  getAllAppointments,
};

export default userServices;
