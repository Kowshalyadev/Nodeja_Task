import React from "react";

const AppointmentCard = ({ label, time, icon }) => {
  return (
    <div className="bg-[#e0e7ff] text-gray-800 rounded-2xl px-4 py-3 w-full sm:w-[240px] shadow-sm text-sm font-medium">
      <div className="flex justify-between items-center mb-1">
        <div>{label}</div>
        <div className="text-xl">{icon}</div>
      </div>
      <div className="text-xs text-gray-600">{time}</div>
    </div>
  );
};

export default AppointmentCard;
