import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Myprofile from './components/Myprofile'

import './App.css';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        
        <Route  path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path='/myprofile' element={<Myprofile/>}/>
    </Routes>
    </BrowserRouter>
    
  );
};

export default App;
