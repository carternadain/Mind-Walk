import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import StressReliefPage from './pages/StressReliefPage';
import PressureManagementPage from './pages/PressureManagementPage';
import PositiveSelfImagePage from './pages/PositiveSelfImagePage';
import Login from './pages/login';
import GetStarted from './pages/getstarted';

function App() {
  return (
    <Router>
     
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/stress-relief" element={<StressReliefPage/>} />
          <Route path="/pressure-management" element={<PressureManagementPage/>} />
          <Route path='/positive-self-image' element={<PositiveSelfImagePage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/get-started' element={<GetStarted/>} />
        </Routes>
       
    </Router>
  );
}

export default App;