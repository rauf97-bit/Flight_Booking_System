import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './screens/Home';
import Booking from './screens/Booking';
import Manage from './screens/Manage';
import About from './screens/About';
import Dashboard from './screens/Dashboard';
function App() {
  return (
    <Router>
      <Routes path="/">
        <Route index element={<Home/>} />
        <Route path='booking' element={<Booking/>} />
        <Route path='manage' element={<Manage/>} />
        <Route path='about' element={<About/>} />
        <Route path='dashboard' element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
