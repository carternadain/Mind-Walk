import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import StressReliefPage from './pages/StressReliefPage';
import PressureManagementPage from './pages/PressureManagementPage';
import PositiveSelfImagePage from './pages/PositiveSelfImagePage';


function App() {
  return (
    <Router>
     
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/stress-relief" element={<StressReliefPage/>} />
          <Route path="/pressure-management" element={<PressureManagementPage/>} />
          <Route path='/positive-self-image' element={<PositiveSelfImagePage/>} />
        </Routes>
       
    </Router>
  );
}

export default App;