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
    const { data } = await axios({
      url: 'http://localhost:3000/',
       credentials: 'include',
      method: 'GET',
    });
    dispatch(mentorsFetched(data));
  } catch (error) {
    console.log(error);
  }
};

const userServices = {
  logout,
  fetchMentors,
};

export default userServices;
