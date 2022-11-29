import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { fetchCoaches } from '../mentors/coachSlice';

function ReservationForm() {
  const dispatch = useDispatch();
  const retrieveCoaches = () => {
    dispatch(fetchCoaches());
  };

  const { id } = useParams();

  const coaches = useSelector((state) => state?.coaches?.coaches);
  useEffect(() => {
    retrieveCoaches();
  }, [fetchCoaches]);

  const [state, setState] = useState({
    coachId: id,
    reserve_date: '',
    city: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

  const resetFormFields = () => {
    setState({
      coachId: '',
      reserve_date: '',
      city: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/v1/reservations', {
        method: 'POST',
        body: JSON.stringify({
          coach_id: state.coachId,
          reserve_date: state.reserve_date,
          city: state.city,
        }),
      });
      const resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
        setMessage('User created successfully');
      } else {
        setMessage('Some error occured');
      }
    } catch (err) {
      console.log(message);
    }
    resetFormFields();
  };

  return (
    <div>
      <h2>RESERVATION FORM</h2>
      <p>Kindly fill to make reservation(s)</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Coach</Form.Label>
          <Form.Select
            id="coachId"
            name="coachId"
            value={state.coachId}
            onChange={handleChange}
          >
            <option value="default">Select a coach</option>
            {coaches.map((coach) => (
              <option key={coach.id} value={coach.id}>
                {coach.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Reservation Date</Form.Label>
          <Form.Control
            id="reserve_date"
            type="date"
            name="reserve_date"
            value={state.reserve_date}
            placeholder="31/11/2022"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Reservation City</Form.Label>
          <Form.Control
            id="city"
            type="text"
            name="city"
            value={state.city}
            placeholder="Where?"
            onChange={handleChange}
          />
          <Button type="submit">Submit Reservation</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default ReservationForm;
