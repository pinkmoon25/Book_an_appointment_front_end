import React, { useEffect, useState } from 'react';
import { getMentors } from '../../Redux/mentors/mentors';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const ReservationForm = () => {
  const [date, setDate] = useState('');
