import React, { useEffect, useState } from 'react';
import { getMentors } from '../../Redux/mentors/mentors';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const ReservationForm = () => {
  const [date, setDate] = useState('');
  const mentors = useSelector((state) => state.mentorsReducer);
  // const [mentor, setMentor] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getMentors)
  },
    []
  )
  let mentor = mentors.find((item) => parseInt(item.id, 10) === parseInt(id, 10));
  if (!mentor) { localStorage.setItem('item', JSON.stringify(mentor)) }
  mentor = JSON.parse(localStorage.getItem('item'));
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Reservation</h1>
        <input name='date' type='date' value={date} onChange={(e) => setDate(e.target.value)} />
        <select name="skills" id="skills">
          <option value='react'>react</option>
        </select>