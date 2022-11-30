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

const userServices = {
  logout,
  fetchMentors,
};

export default userServices;
