// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AIagent from './pages/AIagent';
import Dash from './pages/Dash';
import Campaign from './pages/Campaign';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/aiagent' element={<AIagent/>} />
      <Route path='/dashboard' element={<Dash/>} />
      <Route path='/campaign' element={<Campaign/>} />
    </Routes>
  );
}

export default App;
