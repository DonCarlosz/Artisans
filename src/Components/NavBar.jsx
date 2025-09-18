import React, { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { asset } from "../Images/asset";
import { useAuth } from "../contexts/AuthContext"; // ✅ import Auth context


const NavBar = () => {
  const { user } = useAuth(); // ✅ get current user
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (user) {
      navigate("/dashboard"); // go to dashboard if logged in
    } else {
      navigate("/signup"); // fallback
    }
  };

  return (
    <section className="fixed top-0 left-0 right-0 z-40 overflow-hidden">
      <div className="padding py-3 bg-black/20">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-1.5">
            <img src={asset.logo} alt="" className="h-9" />
            <img src={asset.logo2} alt="" className="h-11 hidden md:block" />
          </NavLink>

          {/* Search */}
          <div className="border-1 hidden border-neutral-400 md:flex gap-2 py-2 px-2 items-center rounded-xl">
            <Search className="size-5" />
            <input
              type="text"
              className="outline-none w-80 rounde"
              placeholder="Search for Plumber, Tailor, Makeup..."
            />
          </div>

          {/* Desktop Nav */}
          <nav className="flex items-center">
            {user ? (
              <img
                src={user.photoURL || asset.SignImage} // fallback image if no photo
                alt="Profile"
                className="h-10 w-10 rounded-full cursor-pointer border-2 border-primary"
                onClick={handleProfileClick}
              />
            ) : (
              <button
                onClick={() => navigate("/signup")}
                className="bg-primary text-white"
              >
                Join Us
              </button>
            )}
          </nav>

          
        </div>
      </div>

    </section>
  );
};

export default NavBar;
