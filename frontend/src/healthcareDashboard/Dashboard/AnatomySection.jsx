import React from "react";
import bodyImg from "../assets/anatomyy.png"
import "./AnatomySection.css"
const AnatomySection = () => {
  return (
    <div className="anatomy-container">
      <img
        src={bodyImg}
        alt="Human Anatomy"
        className="anatomy-image"
      />
    </div>
  );
};

export default AnatomySection;
