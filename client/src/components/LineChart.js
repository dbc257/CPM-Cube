import React from "react";
import { Line } from "react-chartjs-2";

var createReactClass = require("create-react-class");

const options = {
  scales: {
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Dollar Amount",
        },
      },
    ],
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Month",
        },
      },
    ],
  },
};

export default createReactClass({
  displayName: "LineExample",

  render() {
    return (
      <div>
        <h2>Line Example</h2>
        <Line data={this.props.lineData} options={options} />
      </div>
    );
  },
});
