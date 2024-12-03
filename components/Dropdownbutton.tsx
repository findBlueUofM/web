import React, { useEffect, useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import "./DropdownButton.css"; // Import the CSS for styling
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { RouterRounded } from "@mui/icons-material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const DropdownButton: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [user, setUser] = useState<any>(false);
  const router = useRouter();
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/");
  }
  useEffect(() => {
    const fetchUser = async () => {
      const session = await supabase.auth.getUser();
      setUser(session.data?.user);
    };

    fetchUser();
  }, []);
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
          {!user ? (
            <>
              <a href="/login" onClick={closeDropdown}>
                Login <LoginIcon />
              </a>
              <a href="/login/signup" onClick={closeDropdown}>
                Sign Up
              </a>
            </>
          ) : (
            <a href="#" onClick={handleSignOut}>
              Sign Out <ExitToAppIcon />
            </a>
          )}
        </div>
      )}
    </div>
  );
};
export default DropdownButton;
