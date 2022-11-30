/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-parens */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoaches } from './coachesSlice';

export const CoachesView = () => {
  const coach = useSelector(state => state.coach);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoaches());
  }, []);
  return (
    <div>
      <h2>List of Coaches</h2>
      {coach.loading && <div>Loading...</div>}
      {!coach.loading && coach.error ? (
        <div>
          Error:
          {' '}
          {coach.error}
        </div>
      ) : null}
      {!coach.loading && coach.coaches.length ? (
        <ul>
          {coach.coaches.map((coach) => (
            <li key={coach.id}>{coach.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
