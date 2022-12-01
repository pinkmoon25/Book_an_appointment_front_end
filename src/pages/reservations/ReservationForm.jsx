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
   
  },
    []
  )
