import React, { useEffect, useState } from "react";
import LineChart from "./LineChart";
import CustomSizeBarChart from "./CustomSizeBarChart";
import HorizontalBarChart from "./HorizontalBarChart";
import PieChart from "./PieChart";

export default function Charts() {
  const [lineData, setLineData] = useState({});
  const [pieData, setPieData] = useState({});

  function fetchLineData() {
    fetch("http://localhost:3001/line")
      .then((response) => response.json())
      .then((lineData) => {
        setLineData(lineData);
      });
  }
  useEffect(() => {
    fetchLineData();
  }, []);

  function fetchPieData() {
    fetch("http://localhost:3001/pie")
      .then((response) => response.json())
      .then((pieData) => {
        setPieData(pieData);
      });
  }
  useEffect(() => {
    fetchPieData();
  }, []);

  return (
    <div>
      <h1>Chart Examples</h1>
      <hr />
      <LineChart lineData={lineData} />
      <hr />
      <PieChart pieData={pieData} />
      <hr />
      <HorizontalBarChart />
      <hr />
      <CustomSizeBarChart />
      <hr />
    </div>
  );
}
