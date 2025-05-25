
import React, { useState } from "react";
import api from "../api";

function AdminForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    accessLevels: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedLevels = checked
        ? [...prev.accessLevels, value]
        : prev.accessLevels.filter((level) => level !== value);
      return { ...prev, accessLevels: updatedLevels };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/software", formData);
      alert("Software created successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to create software");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Software name" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange} />
      <label><input type="checkbox" value="Read" onChange={handleCheckboxChange} /> Read</label>
      <label><input type="checkbox" value="Write" onChange={handleCheckboxChange} /> Write</label>
      <label><input type="checkbox" value="Admin" onChange={handleCheckboxChange} /> Admin</label>
      <button type="submit">Create Software</button>
    </form>
  );
}

export default AdminForm;
