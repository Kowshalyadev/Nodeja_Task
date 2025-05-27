import React from "react";
import DashboardOverview from "./DashboardOverview.jsx";

// import "./DashboardOverView.css";

const DashboardMainContent = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#f7f8fc] min-h-screen p-6 gap-6 dashboard-container overflow-x-hidden">
      <div className="flex-1 space-y-6" style={{backgroundColor:"white"}}>
        <DashboardOverview />
      </div>
    </div>
  );
};

export default DashboardMainContent;
