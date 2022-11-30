import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReservationForm from './pages/reservations/ReservationForm';
import ReservationsPage from './pages/reservations/ReservationsPage';
import AddCoach from './pages/mentors/AddCoach';
import { CoachesView } from './pages/mentors/CoachesView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="reservationform" element={<ReservationForm />} />
          <Route path="reservations" element={<ReservationsPage />} />
          <Route path="addcoach" element={<AddCoach />} />
          <Route path="coaches" element={<CoachesView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
