import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>Engineering Notes</h1>
        </Link>
        <nav className="nav">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
          <Link 
            to="/skills" 
            className={location.pathname === '/skills' ? 'nav-link active' : 'nav-link'}
          >
            Skills
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;