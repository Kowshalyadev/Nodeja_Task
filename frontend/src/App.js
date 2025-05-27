import React, { useState } from "react";
import Header from "./healthcareDashboard/Header";
import Sidebar from "./healthcareDashboard/Siderbar";
import DashboardMainContent from "./healthcareDashboard/Dashboard/DashboardMainContent";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <DashboardMainContent />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <>
      <Header />
      <Sidebar setActivePage={setActivePage} />

      {/* ✅ This container offsets the fixed sidebar and header */}
      <div className="ml-[220px] mt-[80px] p-4 bg-blue-50 min-h-screen">
        {renderPage()}
      </div>
    </>
  );
}

export default App;
