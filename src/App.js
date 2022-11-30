import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './pages/logins/LogIn';
import SignUp from './pages/registration/Register';
import Home from './pages/Home';
import LogOut from './pages/LogOut';
import MentorsPage from './pages/mentors/MentorsPage';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path='/mentors' element={<MentorsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
