/* eslint-disable import/prefer-default-export */
export const getAllAppointments = async (baseURL, token) => {
  const response = await fetch(`${baseURL}/appointments`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    });
  const result = await response.json();
  return result; // [{ id: '...', name: '...', date: '...', duration: '...', total: '...' }]
};