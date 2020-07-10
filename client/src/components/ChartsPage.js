import React, { useEffect, useState } from "react";
import LineChart from "./charts/LineChart";
import BarChart from "./charts/BarChart";
import HorizontalBarChart from "./charts/HorizontalBarChart";
import PieChart from "./charts/PieChart";
import "./ChartsPage.css";

export default function Charts() {
  const [lineData, setLineData] = useState({});
  const [pieData, setPieData] = useState({});
  const [hBarData, setHBarData] = useState({});
  const [barData, setBarData] = useState({});

  function fetchLineData() {
    fetch("http://localhost:3001/api/line")
      .then((response) => response.json())
      .then((lineData) => {
        setLineData(lineData);
      });
  }

  useEffect(() => {
    fetchLineData();
  }, []);

  function fetchPieData() {
    fetch("http://localhost:3001/api/pie")
      .then((response) => response.json())
      .then((pieData) => {
        setPieData(pieData);
      });
  }
  useEffect(() => {
    fetchPieData();
  }, []);

  function fetchHBarData() {
    fetch("http://localhost:3001/api/h-bar")
      .then((response) => response.json())
      .then((hBarData) => {
        setHBarData(hBarData);
      });
  }
  useEffect(() => {
    fetchHBarData();
  }, []);

  function fetchBarData() {
    fetch("http://localhost:3001/api/bar")
      .then((response) => response.json())
      .then((barData) => {
        setBarData(barData);
      });
  }
  useEffect(() => {
    fetchBarData();
  }, []);

  return (
    <div>
      <div className="charts-wrapper">
        <br />
        <div>
          <h1>Chart Examples</h1>
        </div>
      </div>
      <hr />
      <LineChart lineData={lineData} />
      <hr />
      <PieChart pieData={pieData} />
      <hr />
      <HorizontalBarChart hBarData={hBarData} />
      <hr />
      <BarChart barData={barData} />
      <hr />
    </div>
  );
}
