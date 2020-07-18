import React from "react";
import { HorizontalBar } from "react-chartjs-2";

var createReactClass = require("create-react-class");

const options = {
  scales: {
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Month",
        },
      },
    ],
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Dollar Amount",
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
        <h3>Horizontal Bar Example</h3>
        <HorizontalBar data={this.props.hBarData} options={options} />
      </div>
    );
  },
});
