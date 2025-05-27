import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalenderView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import "./DashboardOverView.css";

function DashboardOverview() {
  return (
    <div className="dashboard-wrapper">
      {/* LEFT SECTION */}
      <div className="left-panel">
        <h2 className="dashboard-title">Dashboard</h2>

        <div className="top-left">
          <AnatomySection />
          <HealthStatusCards />
        </div>

        <ActivityFeed />
      </div>

      {/* RIGHT SECTION */}
      <div className="right-panel">
       
        <CalendarView />
        
        <UpcomingSchedule />
      </div>
    </div>
  );
}

export default DashboardOverview;
