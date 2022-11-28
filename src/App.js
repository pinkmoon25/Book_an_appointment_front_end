import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReservationForm from './pages/reservations/ReservationForm';
import ReservationsPage from './pages/reservations/ReservationsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="reservationform" element={<ReservationForm />} />
          
        </Routes>
      </BrowserRouter>
      <h1>This is our app by: Oyinlade</h1>
    </div>
  );
}

export default App;
