import { useState } from 'react'
import './App.css'
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App
