// import Header from "./healthcareDashboard/header";
// import Sidebar from "./healthcareDashboard/Siderbar";
// function App() {
//   return (
//     <main className="pt-16 px-4">
//       <Header />
//       <div className="flex">
//       <Sidebar />
//       {/* Your other dashboard components go here */}
//       <div className="flex-1 p-6 bg-blue-50 min-h-screen">Main Content</div>
//     </div>
//       </main>
      
//   );
// }

// export default App;
import React, { useState } from "react";
import Header from "./healthcareDashboard/header";
import Sidebar from "./healthcareDashboard/Siderbar";
import Dashboard from "./healthcareDashboard/Dashboard";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      // You can add more cases here for other pages
      default:
        return <div style={{ marginLeft: "220px", marginTop: "80px" }}>Page not found</div>;
    }
  };

  return (
    <>
      <Header />
      <Sidebar setActivePage={setActivePage} />
      {renderPage()}
    </>
  );
}

export default App;



