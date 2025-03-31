import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">Danji</h1>
      </div>
      <nav className="header-nav">
        <Link to="/" className="nav-button">Earn</Link>
        <Link to="/borrow" className="nav-button">Borrow</Link>
      </nav>
    </header>
  );
};

export default Header;
