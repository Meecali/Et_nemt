import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Trips from './pages/Trips';
import Drivers from './pages/Drivers';
import LiveMap from './pages/LiveMap';
import Navbar from './components/Navbar';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [role, setRole] = useState(localStorage.getItem('role'));
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const isLoggedIn = !!token;

  return (
    <Router>
      {isLoggedIn && <Navbar theme={theme} setTheme={setTheme} />}
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} setRole={setRole} />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/trips" element={isLoggedIn ? <Trips /> : <Navigate to="/login" />} />
        <Route path="/drivers" element={isLoggedIn ? <Drivers /> : <Navigate to="/login" />} />
        <Route path="/live-map" element={isLoggedIn ? <LiveMap /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />} />
      </Routes>
    </Router>
  );
};

export default App;
