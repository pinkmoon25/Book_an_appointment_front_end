import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './pages/logins/LogIn';
import SignUp from './pages/registration/Register';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </BrowserRouter>

      <p>Motherfucker show up</p>
     
    </div>
  );
}

export default App;
