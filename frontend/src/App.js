import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; 
import Start from './components/Start';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path ="/" element={<HomePage />} />
        <Route path ="/start" element={<Start />} />
      </Routes>
    </Router>
  );
}

export default App;