const logout = async () => {
  fetch('http://localhost:3000/logout', {
    credentials: 'include',
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const userServices = {
  logout,
};

export default userServices;
