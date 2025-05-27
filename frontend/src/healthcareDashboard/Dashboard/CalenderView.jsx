import React from "react";

function CalendarView() {
  return (
    <div
      style={{
        flex: "1",
        backgroundColor: "#f9fafe",
        padding: "20px",
        marginLeft: "1px",
        borderRadius: "20px",
        fontFamily: "'Inter', sans-serif",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#333" }}>
          October 2021
        </h3>
        <div>
          <span style={{ margin: "0 8px", color: "#6b7280" }}>←</span>
          <span style={{ margin: "0 8px", color: "#6b7280" }}>→</span>
        </div>
      </div>

      {/* Calendar grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          textAlign: "center",
          color: "#6b7280",
          fontSize: "12px",
          fontWeight: "500",
        }}
      >
        {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day, idx) => (
          <div key={idx} style={{ marginBottom: "6px" }}>
            {day}
          </div>
        ))}
        {["25", "26", "27", "28", "29", "30", "31"].map((date, idx) => (
          <div
            key={idx}
            style={{
              fontSize: "14px",
              fontWeight: date === "26" ? "600" : "500",
              color: date === "31" ? "#cbd5e1" : "#111827",
            }}
          >
            {date}
          </div>
        ))}
      </div>

      {/* Time slots */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "8px",
          textAlign: "center",
          marginTop: "8px",
          fontSize: "12px",
          fontWeight: "500",
          color: "#374151",
        }}
      >
        {["10:00", "08:00", "12:00", "10:00", "14:00", "12:00", "09:00"].map(
          (time, idx) => (
            <div key={idx}>{time}</div>
          )
        )}
        {["11:00", "09:00", "13:00", "11:00", "16:00", "14:00", "10:00"].map(
          (time, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: idx === 1 ? "#4338ca" : "#e0e7ff",
                color: idx === 1 ? "#fff" : "#000",
                borderRadius: "10px",
                padding: "3px 6px",
                margin: "4px auto",
                display: "inline-block",
                fontWeight: "600",
                width: "fit-content",
              }}
            >
              {time}
            </div>
          )
        )}
        {["12:00", "10:00", "15:00", "—", "15:00", "15:00", "11:00"].map(
          (time, idx) => (
            <div
              key={idx}
              style={{ color: time === "—" ? "#cbd5e1" : "#374151" }}
            >
              {time}
            </div>
          )
        )}
      </div>

      {/* Appointment Cards */}
      <div
        className="appointment-cards-row"
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "12px",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div
          className="appointment-card dentist-card"
          style={{
            backgroundColor: "#4338ca",
            color: "#fff",
            borderRadius: "16px",
            padding: "16px",
            flex: "1 1 300px",
            minWidth: "300px",
            maxWidth: "350px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{ fontWeight: "600", fontSize: "14px", marginBottom: "4px" }}
          >
            Dentist 🦷
          </div>
          <div style={{ fontSize: "13px" }}>09:00–11:00</div>
          <div style={{ fontSize: "12px", marginTop: "4px" }}>
            Dr. Cameron Williamson
          </div>
        </div>

        <div
          className="appointment-card physio-card"
          style={{
            backgroundColor: "#e0e7ff",
            color: "#111827",
            borderRadius: "16px",
            padding: "16px",
            flex: "1 1 300px",
            minWidth: "300px",
            maxWidth: "350px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{ fontWeight: "600", fontSize: "14px", marginBottom: "4px" }}
          >
            Physiotherapy Appointment 💪
          </div>
          <div style={{ fontSize: "13px" }}>11:00–12:00</div>
          <div style={{ fontSize: "12px", marginTop: "4px" }}>
            Dr. Kevin Djones
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;
