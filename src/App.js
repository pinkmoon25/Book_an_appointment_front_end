import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import './styling/Navbar.css';
import { useSelector } from 'react-redux';
import logo from '../codes_expert.png';
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';




const App = () => {
  const loggedUser=localStorage.getItem('user');
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedUser) {
      const user = JSON.parse(loggedUser, 'user');
      dispatch(addUser(originalText));}
    },[loggedUser,dispatch]);
    

    return (
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/MentorDetails/:MentorID" element={<MentorDetails />} />
          <Route path="/AddMentor" element={<AddMentor />} />
          <Route path="/ReservationsForm" element={<ReservationsForm />} />
          <Route path="/Reservations" element={<Reservations />} />
          <Route path="/DeleteAppointments" element={<DeleteAppointments />} />
        </Routes>
      </div>
    );
  };
  
  
export default App;
