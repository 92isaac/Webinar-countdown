import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Subscribe from './component/Subscribe';
import Countd from './component/Countd';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Subscribe /> } />
          <Route path="/webinar" element={<Countd /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
