import React from "react";
import { Pie } from "react-chartjs-2";

var createReactClass = require("create-react-class");

export default createReactClass({
  displayName: "PieExample",

  render() {
    return (
      <div>
        <h3>Pie Example</h3>
        <Pie data={this.props.pieData} />
      </div>
    );
  },
});
