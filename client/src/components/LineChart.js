import React from "react";
import { Line } from "react-chartjs-2";

var createReactClass = require("create-react-class");

export default createReactClass({
  displayName: "LineExample",
  // constructor() {
  //   this.state = {
  //     data: {},
  //   };
  // },

  // getInitialState: function () {
  //   return { data: this.props.data };
  // },
  // componentDidMount() {
  //   this.fetchLineData();
  // },

  render() {
    return (
      <div>
        <h2>Line Example</h2>
        <Line data={this.props.lineData} />
      </div>
    );
  },
});

// const data = {
//   labels: ["January", "February", "March", "April", "May", "June", "July"],
//   datasets: [
//     {
//       label: "My First dataset",
//       fill: false,
//       lineTension: 0.1,
//       backgroundColor: "rgba(75,192,192,0.4)",
//       borderColor: "rgba(75,192,192,1)",
//       borderCapStyle: "butt",
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: "miter",
//       pointBorderColor: "rgba(75,192,192,1)",
//       pointBackgroundColor: "#fff",
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: "rgba(75,192,192,1)",
//       pointHoverBorderColor: "rgba(220,220,220,1)",
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [65, 59, 80, 81, 56, 55, 40],
//     },
//   ],
// };
