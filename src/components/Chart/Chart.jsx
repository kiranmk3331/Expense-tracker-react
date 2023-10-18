import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ chartData }) => {
  const chartValueArray = chartData.map((data) => data.value);
  const maxValue = Math.max(...chartValueArray);

  return (
    <div className="chart">
      {chartData.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          label={data.label}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default Chart;
