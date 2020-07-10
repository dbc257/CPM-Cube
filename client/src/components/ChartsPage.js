import React, { useEffect, useState } from "react";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import HorizontalBarChart from "./HorizontalBarChart";
import PieChart from "./PieChart";
import { connect } from "react-redux"

function Charts(props) {
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

  console.log(props.chosenOrg)

  return (
    <div>
      <h1>Chart Examples for {`${props.chosenOrg[0]}`}</h1>
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

const mapStateToProps = state => {
  return {
    chosenOrg: state.buttonRed.chosenOrg
  }
}

export default connect(mapStateToProps)(Charts)
