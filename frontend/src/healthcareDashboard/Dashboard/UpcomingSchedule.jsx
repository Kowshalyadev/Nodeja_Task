import React from "react";
// import AppointmentCard  from "./SimpleAppointmentCard"
const UpcomingSchedule = () => {
  return (
   <div style={{marginLeft:"-100px"}}>
    <h2 className="text-lg font-semibold mb-4 text-gray-900">The Upcoming Schedule</h2>
     <p className="text-sm font-medium text-gray-600 mb-4">On Thursday</p>
    <div style={{
  marginTop: "20px",
  display: "flex",
  gap: "12px",
  justifyContent: "space-between"
}}>
  
  <div style={{
    flex: 1,
    backgroundColor: "#e0e7ff",
    color: "#111827",
    borderRadius: "16px",
    padding: "16px",
    minWidth: "200px",
    maxWidth: "350px"
  }}>
    <div style={{ fontWeight: "600", fontSize: "14px", marginBottom: "4px" }}>
      Health checkup complete 🩺
    </div>
    <div style={{ fontSize: "13px" }}>11:00 AM</div>
    
  </div>

  <div style={{
    flex: 1,
    backgroundColor: "#e0e7ff",
    color: "#111827",
    borderRadius: "16px",
    padding: "16px",
    minWidth: "200px",
    maxWidth: "350px"
  }}>
    <div style={{ fontWeight: "600", fontSize: "14px", marginBottom: "4px" }}>
      Ophthalmologist 👁️
    </div>
    <div style={{ fontSize: "13px" }}>14:00 PM</div>
   
  </div>
</div>
{/* SATURDAY */}
<p className="text-sm font-medium text-gray-600 mb-4">On Saturday</p>
  <div style={{
  marginTop: "20px",
  display: "flex",
  gap: "12px",
  justifyContent: "space-between"
}}>
  
  <div style={{
    flex: 1,
    backgroundColor: "#e0e7ff",
    color: "#111827",
    borderRadius: "16px",
    padding: "16px",
    minWidth: "200px",
    maxWidth: "350px"
  }}>
    <div style={{ fontWeight: "600", fontSize: "14px", marginBottom: "4px" }}>
     Cardiologist ❤️
    </div>
    <div style={{ fontSize: "13px" }}>12:00 AM</div>
    
  </div>

  <div style={{
    flex: 1,
    backgroundColor: "#e0e7ff",
    color: "#111827",
    borderRadius: "16px",
    padding: "16px",
    minWidth: "200px",
    maxWidth: "350px"
  }}>
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
