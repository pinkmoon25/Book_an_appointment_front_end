import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './pages/logins/LogIn';
import SignUp from './pages/registration/Register';
import Home from './pages/Home';
import LogOut from './components/LogOut';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/logout" element={<LogOut />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
