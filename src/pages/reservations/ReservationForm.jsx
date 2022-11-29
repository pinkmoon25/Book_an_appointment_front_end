import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ReservationForm() {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <h2>RESERVATION FORM</h2>
      <p>Kindly fill to make reservation(s)</p>
      <Form>
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
