import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header-container">
      <nav className="navbar">
        <div className="logo">Healthcare.</div>

        <div className="search-bar">
          <input type="text" placeholder="Search..." disabled />
        </div>

        <div className="nav-icons">
          <span className="icon">🔔</span>
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
