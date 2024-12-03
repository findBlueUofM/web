import React, { useEffect, useState, useRef } from "react";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import CreateIcon from "@mui/icons-material/Create";
import SettingsIcon from "@mui/icons-material/Settings";
import Link from "next/link";
import "./DropdownButton.css";

const DropdownButton: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

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
  };

  useEffect(() => {
    const fetchUser = async () => {
      const session = await supabase.auth.getUser();
      setUser(session.data?.user);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDropdownOpen]);

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button
        className="dropdown-button"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
      >
        <MenuIcon />
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          {!user ? (
            <>
              <Link href="/login" passHref onClick={closeDropdown}>
                Login <LoginIcon />
              </Link>
              <Link href="/login/signup" passHref onClick={closeDropdown}>
                Sign Up <CreateIcon />
              </Link>
            </>
          ) : (
            <>
              <Link href="/settings" passHref onClick={closeDropdown}>
                Settings <SettingsIcon />
              </Link>
              <Link href="/#" passHref onClick={handleSignOut}>
                Sign Out <ExitToAppIcon />
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
