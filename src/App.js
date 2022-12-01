import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './pages/logins/LogIn';
import SignUp from './pages/registration/Register';
import Home from './pages/Home';
import LogOut from './pages/LogOut';
import MentorsPage from './pages/mentors/MentorsPage';
import MentorsDetails from './pages/mentors/MentorsDetails';
import ReservationForm from './pages/reservations/ReservationForm';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/mentors" element={<MentorsPage />} />
          <Route path="/mentors/:id" element={<MentorsDetails />} />
          <Route path="/reservation/:id" element={<ReservationForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
