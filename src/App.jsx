// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AIagent from './pages/AIagent';
import Dash from './pages/Dash';
import Campaign from './pages/Campaign';
import Leads from './pages/Leads';
import Payout from './pages/Payout';
import Promoters from './pages/Promoters';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/aiagent' element={<AIagent/>} />
      <Route path='/dashboard' element={<Dash/>} />
      <Route path='/campaign' element={<Campaign/>} />
      <Route path='/leads' element={<Leads/>} />
      <Route path='/payouts' element={<Payout/>} />
      <Route path='/promoters' element={<Promoters/>} />
    </Routes>
  );
}

export default App;
