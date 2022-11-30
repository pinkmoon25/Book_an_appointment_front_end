import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { getMentors } from '../../Redux/mentors/mentors';


const MentorsDetails = () => {
    const mentors = useSelector((state) => state.mentorsReducer, shallowEqual);
    const dispatch = useDispatch();
  
    const { id } = useParams();
    const { state } = useLocation();
  
    useEffect(
      () => {
        dispatch(getMentors());
      },
      [dispatch],
      state,
    );
  
    let doctor = mentors.find((item) => parseInt(item.id, 10) === parseInt(id, 10));
  
    localStorage.setItem('item', JSON.stringify(state));
  
    doctor = JSON.parse(localStorage.getItem('item'));
  return (
    <div>MentorsDetails</div>
  )
}

export default MentorsDetails