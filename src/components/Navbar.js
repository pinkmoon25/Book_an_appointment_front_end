/* eslint-disable no-undef */
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import logo from '../codes_expert.png';

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const activeLink = ({ isActive }) => `nav-link${(isActive ? ' activated' : '')}`;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  useEffect(() => {
  }, [user]);

  const closeMenu = () => {
    setNavbarOpen(true);
  };

  return (
    <nav>
      <div className="btn-container">
        { navbarOpen
          ? <button className="menu-btn" onClick={handleToggle} type="button">&#9776;</button>
          : <button className="menu-btn" onClick={handleToggle} type="button">&#9747;</button>}
      </div>
      <div className={`logo-container ${navbarOpen ? ' closeMenu' : ''}`}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={`nav-links ${navbarOpen ? ' closeMenu' : ''}`}>
        <NavLink to="/" className="nav-link" onClick={() => closeMenu()}>Home</NavLink>
        <NavLink to="/Reservations" className={activeLink} onClick={() => closeMenu()}>My Appointments</NavLink>
        <NavLink to="/AddMentor" className={activeLink} onClick={() => closeMenu()}>Create Appointment</NavLink>
        <NavLink to="/ReservationsForm" className={activeLink} onClick={() => closeMenu()}>Reserve Appointment</NavLink>
        <NavLink to="/DeleteAppointments" className={activeLink} onClick={() => closeMenu()}>Delete Appointment</NavLink>
      </div>

      {user.length > 0
        ? (
          <div className={`sign-out ${navbarOpen ? ' closeMenu' : ''}`}>
            <button className="sign-out-btn" type="button" onClick={signOut}>Sign Out</button>
            <button className="sign-out-btn" type="button" onClick={deleteAccount}>Delete Account</button>
          </div>
        ) : ('')}
    </nav>
  );
};

export default Navbar;
