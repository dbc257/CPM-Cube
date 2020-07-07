import React from "react";
import LineChart from "./LineChart";
import CustomSizeBarChart from "./CustomSizeBarChart";
import HorizontalBarChart from "./HorizontalBarChart";
import PieChart from "./PieChart";

export default function Charts() {
  return (
    <div>
      <h1>Chart Examples</h1>
      <hr />
      <LineChart />
      <hr />
      <PieChart />
      <hr />
      <HorizontalBarChart />
      <hr />
      <CustomSizeBarChart />
      <hr />
    </div>
  );
}
