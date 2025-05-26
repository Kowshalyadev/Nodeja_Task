import React from "react";
import "./HealthStatusCards.css";

function HealthStatusCards() {
  const cards = [
    { label: "Lungs", icon: "🫁", status: "red", date: "26 Oct 2021" },
    { label: "Teeth", icon: "🦷", status: "green", date: "26 Oct 2021" },
    { label: "Bone", icon: "🦴", status: "orange", date: "26 Oct 2021" },
  ];

  return (
    <div className="status-cards">
      {cards.map(({ label, status, date, icon }) => (
        <div className="status-card" key={label}>
          <div className="card-header">
            <span className="emoji">{icon}</span>
            <h4>{label}</h4>
          </div>
          <p className="date">Date: {date}</p>
          <div className="status-bar-wrapper">
            <div className={`status-bar ${status}`}></div>
          </div>
        </div>
      ))}
      <div className="details-link">Details →</div>
    </div>
  );
}

export default HealthStatusCards;
