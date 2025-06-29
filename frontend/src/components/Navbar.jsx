import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ theme, setTheme }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <nav style={{ padding: 20, display: 'flex', justifyContent: 'space-between', background: '#222', color: '#fff' }}>
      <div>
        <strong>M&E Technology</strong> | <Link to="/dashboard">Dashboard</Link> | <Link to="/trips">Trips</Link> | <Link to="/drivers">Drivers</Link> | <Link to="/live-map">Live Map</Link>
      </div>
      <div>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Theme: {theme}</button>
        <button onClick={logout} style={{ marginLeft: 10 }}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
