import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Stake from './Stake';
import './App.css';
import './Style.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='Stake/*' element={<Stake />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
