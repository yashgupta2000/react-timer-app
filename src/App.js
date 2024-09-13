import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Timer from './pages/Timer';
import { useState } from 'react';

function App() {
  let [counterValue, setcounterValue] = useState(0);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/timer" element={<Timer counterValue={counterValue} setcounterValue={setcounterValue}  />}  />
    </Routes>
  );
}

export default App;
