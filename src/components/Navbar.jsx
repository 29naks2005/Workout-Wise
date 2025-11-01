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
        <Link href="#bmi-section">
          BMI/M.Calories
</Link>

      </div>
    </nav>
  );
};

export default Navbar;
