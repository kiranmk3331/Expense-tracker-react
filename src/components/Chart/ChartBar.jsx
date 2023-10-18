import React from "react";
import "./ChartBar.css";

const ChartBar = ({ value, label, maxValue }) => {
  let fillValue = "0%";

  if (maxValue > 0) {
    fillValue = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar-inner">
        <div className="chart-bar-fill" style={{ height: fillValue }}></div>
      </div>
      <div className="chart-bar-label">{label}</div>
    </div>
  );
};

export default ChartBar;
