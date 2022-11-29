import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReservationForm from './pages/reservations/ReservationForm';
import ReservationsPage from './pages/reservations/ReservationsPage';
import AddMentor from './pages/mentors/AddCoach';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="reservationform" element={<ReservationForm />} />
          <Route path="reservations" element={<ReservationsPage />} />
          <Route path="addmentor" element={<AddMentor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
