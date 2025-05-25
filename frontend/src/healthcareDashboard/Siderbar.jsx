// src/components/Sidebar.js
import React from "react";
import "./Sidebar.css";
import { FiHome, FiCalendar, FiClipboard, FiBarChart2, FiMessageCircle, FiPhone, FiSettings } from "react-icons/fi";
import { BsClockHistory } from "react-icons/bs";
import { MdOutlineMedicalServices } from "react-icons/md";

function Sidebar({ setActivePage }) {
  return (
    <aside className="sidebar">
      <h4 className="sidebar-heading">General</h4>
      <ul className="sidebar-menu">
        <li onClick={() => setActivePage("dashboard")}><FiHome /> Dashboard</li>
        <li><BsClockHistory /> History</li>
        <li><FiCalendar /> Calendar</li>
        <li><FiClipboard /> Appointments</li>
        <li><FiBarChart2 /> Statistics</li>
        <li><MdOutlineMedicalServices /> Tests</li>
      </ul>

      <h4 className="sidebar-heading">Tools</h4>
      <ul className="sidebar-menu">
        <li><FiMessageCircle /> Chat</li>
        <li><FiPhone /> Support</li>
      </ul>

      <ul className="sidebar-menu bottom">
        <li><FiSettings /> Setting</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
