import React from "react";
import { Bar } from "react-chartjs-2";

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
  displayName: "BarExample",

  render() {
    return (
      <div>
        <h2>Bar Example</h2>
        <Bar data={this.props.barData} options={options} />
      </div>
    );
  },
});
