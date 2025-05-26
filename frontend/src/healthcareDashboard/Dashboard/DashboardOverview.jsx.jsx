import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalenderView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import "./DashboardOverView.css"; 

function DashboardOverview() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <div className="dashboard-layout">
          {/* Left Column */}
          <div className="dashboard-column">
            <h3 className="dashboard-title">Dashboard</h3>
            <AnatomySection />
            <div className="activity-wrapper">
              <ActivityFeed />
            </div>
          </div>

          {/* Middle Column */}
          <div className="dashboard-column middle">
            <HealthStatusCards />
          </div>

          {/* Right Column */}
          <div className="dashboard-column">
            <CalendarView />
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;
