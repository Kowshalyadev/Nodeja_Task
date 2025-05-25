// src/pages/ManagerView.jsx
import React, { useEffect, useState } from "react";
import api from "../api";

function ManagerView() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const res = await api.get("/requests");
      setRequests(res.data);
    };
    fetchRequests();
  }, []);

  const handleDecision = async (id, status) => {
    try {
      await api.patch(`/requests/${id}`, { status });
      setRequests((prev) =>
        prev.map((req) =>
          req.id === id ? { ...req, status } : req
        )
      );
    } catch (err) {
      console.error(err);
      alert("Failed to update request status");
    }
  };

  return (
    <div>
      <h2>Pending Access Requests</h2>
      <ul>
        {requests.map((req) => (
          <li key={req.id}>
            <p>User: {req.user?.username}</p>
            <p>Software: {req.software?.name}</p>
            <p>Type: {req.accessType}</p>
            <p>Reason: {req.reason}</p>
            <p>Status: {req.status}</p>
            {req.status === "Pending" && (
              <>
                <button onClick={() => handleDecision(req.id, "Approved")}>Approve</button>
                <button onClick={() => handleDecision(req.id, "Rejected")}>Reject</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManagerView;
