// src/pages/RequestForm.jsx
import React, { useState, useEffect } from "react";
import api from "../api";

function RequestForm() {
  const [softwareList, setSoftwareList] = useState([]);
  const [formData, setFormData] = useState({
    softwareId: "",
    accessType: "Read",
    reason: "",
  });

  useEffect(() => {
    const fetchSoftware = async () => {
      const res = await api.get("/software");
      setSoftwareList(res.data);
    };
    fetchSoftware();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/requests", formData);
      alert("Access request submitted!");
    } catch (err) {
      console.error(err);
      alert("Failed to submit request");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="softwareId" onChange={handleChange} required>
        <option value="">Select software</option>
        {softwareList.map((soft) => (
          <option key={soft.id} value={soft.id}>{soft.name}</option>
        ))}
      </select>
      <select name="accessType" onChange={handleChange}>
        <option>Read</option>
        <option>Write</option>
        <option>Admin</option>
      </select>
      <textarea name="reason" placeholder="Reason" onChange={handleChange} required />
      <button type="submit">Submit Request</button>
    </form>
  );
}

export default RequestForm;
