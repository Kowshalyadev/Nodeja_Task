import React from "react";
import "./UpcomingSchedule.css";

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-container">
      <h2 className="upcoming-title">The Upcoming Schedule</h2>

      {/* Thursday */}
      <p className="upcoming-day-label">On Thursday</p>

      <div
        className="schedule-row"
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "12px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundColor: "#e0e7ff",
            color: "#111827",
            borderRadius: "16px",
            padding: "16px",
            minWidth: "200px",
            maxWidth: "350px",
          }}
        >
          <div style={{ fontWeight: "600", fontSize: "14px", marginBottom: "4px" }}>
            Health checkup complete 🩺
          </div>
          <div style={{ fontSize: "13px" }}>11:00 AM</div>
        </div>

        <div
          style={{
            flex: 1,
            backgroundColor: "#e0e7ff",
            color: "#111827",
            borderRadius: "16px",
            padding: "16px",
            minWidth: "200px",
            maxWidth: "350px",
          }}
        >
          <div style={{ fontWeight: "600", fontSize: "14px", marginBottom: "4px" }}>
            Ophthalmologist 👁️
          </div>
          <div style={{ fontSize: "13px" }}>14:00 PM</div>
        </div>
      </div>

      {/* Saturday */}
      <p className="upcoming-day-label">On Saturday</p>

      <div
        className="schedule-row"
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "12px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundColor: "#e0e7ff",
            color: "#111827",
            borderRadius: "16px",
            padding: "16px",
            minWidth: "200px",
            maxWidth: "350px",
          }}
        >
          <div style={{ fontWeight: "600", fontSize: "14px", marginBottom: "4px" }}>
            Cardiologist ❤️
          </div>
          <div style={{ fontSize: "13px" }}>12:00 AM</div>
        </div>

        <div
          style={{
            flex: 1,
            backgroundColor: "#e0e7ff",
            color: "#111827",
            borderRadius: "16px",
            padding: "16px",
            minWidth: "200px",
            maxWidth: "350px",
          }}
        >
          <div style={{ fontWeight: "600", fontSize: "14px", marginBottom: "4px" }}>
            Neurologist 🧠
          </div>
          <div style={{ fontSize: "13px" }}>16:00 PM</div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
