'use client'; 
import React, { useState } from 'react';
import Link from 'next/link';
import './Navbar.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">WORKOUT WISE</div>

      <div className="nav-links">
        <Link href="/">Home</Link>
        <div className="dropdown">
          <Link href="/workouts">Workouts</Link>
        </div>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
