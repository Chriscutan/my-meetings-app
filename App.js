import './App.css';
import {Route, Routes} from 'react-router-dom';
import Navigation from './navigation/Navigation';
import Home from './pages/Home';
import ScheduleMeeting from './pages/ScheduleMeeting';
import Register from './pages/Register.js';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/schedule' element={<ScheduleMeeting />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
