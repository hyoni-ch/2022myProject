import React from 'react';
import logo from './logo.svg';
import './App.css';
import Commu from './component/Commu';
import Cafe from './component/Cafe';
import CommuWork from './component/CommuWork';
import CommuWork from './component/CommuAsk';
import CommuWork from './component/CommuMemory';
import CommuWork from './component/Board';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';


function App() {
  return (
    
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Commu />} />
          <Route path="/cafe" element={<Cafe />} />
          <Route path="/work" element={<CommuWork />} />
          <Route path="/board" element={<Board />} />
          <Route path="/ask" element={<CommuAsk />} />
          <Route path="/memory" element={<CommuMemory />} />
        </Routes>
      </BrowserRouter>
        
  
    </div>
  );
}

export default App;
