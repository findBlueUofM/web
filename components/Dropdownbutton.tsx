import React, { useState } from 'react';
import './DropdownButton.css'; // Import the CSS for styling
const DropdownButton: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  return (
    <div className="dropdown-container">
      <button
        className="dropdown-button"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
      >
        ☰ {/* Hamburger icon */}
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu" onMouseLeave={closeDropdown}>
          <a href="/login" onClick={closeDropdown}>Login</a>
          <a href="/signup" onClick={closeDropdown}>Sign Up</a>
        </div>
      )}
    </div>
  );
};
export default DropdownButton;
