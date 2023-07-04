import React from 'react';
import  Navbar from './components/inc/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home'
import {BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

function App() {
  return (
  
<div>
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/home" element={<Home />} />
    </Routes>
    </Router>
</div>
  );
}

export default App;
