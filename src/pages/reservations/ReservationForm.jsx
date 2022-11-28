/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
import React from 'react';

function ReservationForm() {
  return (
    <div className="container d-flex w-50 flex-column align-items-center justify-content-center height">
      <h2 className="mt-3">BOOK AN APPOINTMENT</h2>
      <h5>Fill this form to schedule an appointment</h5>
      <form action="" className="d-flex flex-column form-control form-height">
        <label htmlFor="">Mentor</label>
        <select name="" id="">
          <option value="" className="mt-3">Select</option>
          <option value="" className="mt-3">Mentor 1</option>
          <option value="" className="mt-3">Mentor 2</option>
          <option value="" className="mt-3">Mentor 3</option>
          <option value="" className="mt-3">Mentor 4</option>
        </select>
        <label htmlFor="">Appointment Date</label>
        <input type="date" />
        <label htmlFor="">Reserved City</label>
        <input type="text" />
        <button type="submit" className="mt-3 p-1">Submit</button>
      </form>

    </div>
  );
}

export default ReservationForm;
