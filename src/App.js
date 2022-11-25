/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import './styling/Navbar.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import { addUser } from './redux/user/user';
import Login from './pages/Login';
import SignUp from './pages/Register';
import MentorDetails from './pages/MentorDetails';
import AddMentor from './pages/AddMentor';
import ReservationsForm from './pages/ReservationsForm';
import Reservations from './pages/Reservations';
import DeleteAppointments from './pages/DeleteAppointments';
import Home from './pages/Home';

const App = () => {
  const loggedUser = localStorage.getItem('user');
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedUser) {
      const user = JSON.parse(loggedUser, 'user');
      dispatch(addUser(originalText));
    }
  }, [loggedUser, dispatch]);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
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
