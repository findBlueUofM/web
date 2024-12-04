import React from 'react';
import Link from 'next/link';
import DropdownButton from './Dropdownbutton' // Import the DropdownButton component
import './Navbar.css'; // Import the CSS for styling
const Navbar: React.FC = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <Link href="/" className="logo">
          <img id="logo" src="/findBlueLogo.png" alt="Michigan Logo" />
        </Link>
        <ul className="nav-links">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li>
            <DropdownButton />
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
