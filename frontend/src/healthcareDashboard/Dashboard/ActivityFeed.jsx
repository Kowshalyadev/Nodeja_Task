import React from 'react';
import './ActivityFeed.css';

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

const barData = [
  ['gray', 'cyan', 'gray', 'blue'],      
  ['gray', 'cyan', 'blue', 'gray'],      
  ['gray', 'cyan', 'blue', 'gray'],      
  ['gray', 'blue', 'gray', 'cyan'],      
  ['gray', 'cyan', 'blue', 'gray'],      
  ['gray', 'cyan', 'blue', 'gray'],    
  ['gray', 'cyan', 'gray', 'blue'],    
];

const barHeights = [
  [60, 50, 30, 40],
  [60, 70, 50, 40], 
  [60, 50, 40, 30], 
  [60, 50, 40, 30], 
  [60, 70, 50, 30], 
  [60, 50, 40, 30], 
  [60, 50, 40, 30], 
];

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h4>Activity</h4>
        <span>3 appointment on this week</span>
      </div>
      <div className="activity-chart">
        {barData.map((colors, dayIndex) => (
          <div className="day-column" key={dayIndex}>
            <div className="bars">
              {colors.map((color, barIndex) => (
                <div
                  key={barIndex}
                  className={`bar ${color}`}
                  style={{ height: `${barHeights[dayIndex][barIndex]}px` }}
                ></div>
              ))}
            </div>
            <div className="day-label">{days[dayIndex]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
