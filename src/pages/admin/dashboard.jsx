import React, {useState} from "react";
import { useSelector } from "react-redux";
import { Form } from 'react-bootstrap';
import { useNavigate } from "react-router";

const Dashboard = ()=>{
  const current_user = JSON.parse(useSelector((state) => state.loginStatus.user));
  const mentors = useSelector((state) => state.mentorsReducer);
  const navigate = useNavigate();

  const [userData, setUserData] = useState([]);
  const [mentorName, setMentorName] = useState('');
  const [mentorImage, setMentorImage] = useState('');
  const [mentorBio, setMentorBio] = useState('');

  const [skillName, setSkillName] = useState('');
  const [skillIcon, setSkillIcon] = useState('');
  const [mentorId, setMentorId] = useState(undefined)

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:3000/users', {
      credentials: "include",
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: current_user.id
      })
    })
    const result = await res.json()
    setUserData(result)
  }

  const toggleUserStatus = async(id) => {
    const response = await fetch(`http://localhost:3000/user/toggle/${id}`)
    const result = await response.json()
      console.log(result)
  }

  const deleteUser = async(id) => {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE"
    })
    const result = await response.json()
    if(result.status === 200){
      let arr = userData.filter((u) => u.id !== id)
      setUserData(arr)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/api/v1/mentors', {
      credentials: 'include',
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mentorName,
        mentorBio,
        mentorImage,
      })
    })
    const result = await response.json()
    console.log(result);
  }

  const addSkills = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/api/v1/skills', {
      credentials: 'include',
      method: 'POST',
      headers: {
        "Accept": 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        skillName,
        skillIcon,
        mentorId
      })
    })
    const result = await response.json();
    if(result.status === 200){
      navigate('/mentors')
    }
  }

  const deleteMentor = async (id) => {
    const response = await fetch(`http://localhost:3000/api/v1/mentors/${id}`, {
      method: "DELETE"
    })
    const result = await response.json()
    if(result.status === 200){
      navigate('/mentors')
    }
  }

  return (
    <>
    <h1>Hello Admin!</h1>
    <button onClick={fetchUsers}> Users </button>
    <ul>
      {
        userData?.map((u) => {
          return (
            <li key={u.id}>
              <h3>{u.username}</h3>
              <button onClick={() => deleteUser(u.id)}>delete</button>
              <button onClick={() => toggleUserStatus(u.id)}>
                Admin: <span>{u.admin ? 'True' : 'False'}</span>
              </button>
            </li>
          )
        })
      }
    </ul>
    <div>
    <form onSubmit={(e) => handleSubmit(e)}>
      <Form.Label>Name</Form.Label>
            <br />
              <Form.Control
                type="text"
                onChange={(e) => setMentorName(e.target.value)}
                required
              />
      <Form.Label>Bio</Form.Label>
            <br />
              <Form.Control
                type="text"
                onChange={(e) => setMentorBio(e.target.value)}
                required
              />
      <Form.Label>Image url</Form.Label>
            <br />
              <Form.Control
                type="text"
                placeholder="Please enter a image URL"
                onChange={(e) => setMentorImage(e.target.value)}
                required
              />
              <button>Add Mentor</button>
        </form>
    </div>
    <div>
    <form onSubmit={(e) => addSkills(e)}>
      <Form.Label>Skill Name</Form.Label>
            <br />
              <Form.Control
                type="text"
                onChange={(e) => setSkillName(e.target.value)}
                required
              />
      <Form.Label>Icon URL</Form.Label>
            <br />
              <Form.Control
                type="text"
                placeholder="Please enter an Icon URL"
                onChange={(e) => setSkillIcon(e.target.value)}
                required
              />
      <Form.Select value={mentorId} onChange={(e) => setMentorId(e.target.value)}>
      <option value="" selected disabled hidden>Select a Mentor</option>
      {mentors?.map((m) => (
                  <option key={m.id} value={m.id}>
                    {console.log(m.id)}
                    {m.name}
                  </option>
                ))}
      </Form.Select>
              <button>Add Skills</button>
        </form>
    </div>

    <h2>Available Mentors: </h2>
        <ul>
        {
        mentors?.map((m) => {
          return (
            <li key={m.id}>
              <h3>{m.name}</h3>
              <button onClick={() => deleteMentor(m.id)}>delete</button>
            </li>
          )
        })
      }
        </ul>
    </>
  )
}

export default Dashboard;
