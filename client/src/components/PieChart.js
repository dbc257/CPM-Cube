import React from "react";
import { Pie } from "react-chartjs-2";

var createReactClass = require("create-react-class");

export default createReactClass({
  displayName: "PieExample",

  render() {
    return (
      <div>
        <h2>Pie Example</h2>
        <Pie data={this.props.pieData} />
      </div>
    );
  },
});
