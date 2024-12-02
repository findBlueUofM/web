import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import "./DropdownButton.css"; // Import the CSS for styling
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";

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
        <MenuIcon />
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu" onMouseLeave={closeDropdown}>
          <a href="/login" onClick={closeDropdown}>
            Login <LoginIcon />{" "}
          </a>
          <a href="/login/signup" onClick={closeDropdown}>
            Sign Up{" "}
          </a>
        </div>
      )}
    </div>
  );
};
export default DropdownButton;
