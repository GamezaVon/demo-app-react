import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import FourOFour from './views/404/NotFound';

function App() {
  return (
    <Routes> 
      <Route path="*" element={<FourOFour />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
