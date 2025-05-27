import React from "react";
import "./Header.css";
import { FiSearch, FiBell } from "react-icons/fi";

function Header() {
  return (
    <header className="header-container">
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">Health<span>care.</span></div>

        {/* Search and Bell */}
        <div className="search-bar-container">
          <div className="search-bar">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="Search" disabled />
          </div>
          <div className="icon">
            <FiBell />
          </div>
        </div>

        {/* Profile and Add */}
        <div className="nav-icons">
          <div className="profile">
            <span role="img" aria-label="avatar">🧑‍⚕️</span>
          </div>
          <button className="add-button">+</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
