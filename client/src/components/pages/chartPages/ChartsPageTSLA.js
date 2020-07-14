import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
// import { Pie } from "react-chartjs-2";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/creators/actionCreators";
// import { LinkContainer } from "react-router-bootstrap";
// import Button from "react-bootstrap/Button";
import "../../css/ChartsPage.css";
// import { withRouter } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// var createReactClass = require("create-react-class");

function ChartPage(props) {
  const [financials, setFinancials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/tesla/charts-tsla")
      .then((response) => response.json())
      .then((result) => {
        setFinancials(result);
      });
  }, []);

  const labelsDate = financials.map((financeDate) => {
    return financeDate.date;
  });

  const dataRevenue = financials.map((financeRevenue) => {
    return financeRevenue.revenue;
  });

  const dataExpenses = financials.map((financeExpenses) => {
    return financeExpenses.costAndExpenses;
  });

  const dataProfit = financials.map((financeProfit) => {
    return financeProfit.grossProfit;
  });

  // const barDataRevenue = {
  //   labels: labelsDate,
  //   datasets: [
  //     {
  //       label: "Revenue",
  //       backgroundColor: "rgba(255,99,132,0.2)",
  //       borderColor: "rgba(255,99,132,1)",
  //       borderWidth: 1,
  //       hoverBackgroundColor: "rgba(255,99,132,0.4)",
  //       hoverBorderColor: "rgba(255,99,132,1)",
  //       data: dataRevenue,
  //     },
  //   ],
  // };

  // const barDataExpenses = {
  //   labels: labelsDate,
  //   datasets: [
  //     {
  //       label: "Expenses",
  //       backgroundColor: "rgba(255,99,132,0.2)",
  //       borderColor: "rgba(255,99,132,1)",
  //       borderWidth: 1,
  //       hoverBackgroundColor: "rgba(255,99,132,0.4)",
  //       hoverBorderColor: "rgba(255,99,132,1)",
  //       data: dataExpenses,
  //     },
  //   ],
  // };

  //   const barDataProfit = {
  //     labels: labelsDate,
  //     datasets: [
  //       {
  //         label: "Gross Profits",
  //         backgroundColor: "rgba(255,99,132,0.2)",
  //         borderColor: "rgba(255,99,132,1)",
  //         borderWidth: 1,
  //         hoverBackgroundColor: "rgba(255,99,132,0.4)",
  //         hoverBorderColor: "rgba(255,99,132,1)",
  //         data: dataProfit,
  //       },
  //     ],
  //   };

  // var data = {
  //   labels: [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ],
  //   datasets: [
  //     {
  //       label: "Stock A",
  //       fill: false,
  //       lineTension: 0.1,
  //       backgroundColor: "rgba(225,0,0,0.4)",
  //       borderColor: "red", // The main line color
  //       borderCapStyle: "square",
  //       borderDash: [], // try [5, 15] for instance
  //       borderDashOffset: 0.0,
  //       borderJoinStyle: "miter",
  //       pointBorderColor: "black",
  //       pointBackgroundColor: "white",
  //       pointBorderWidth: 1,
  //       pointHoverRadius: 8,
  //       pointHoverBackgroundColor: "yellow",
  //       pointHoverBorderColor: "brown",
  //       pointHoverBorderWidth: 2,
  //       pointRadius: 4,
  //       pointHitRadius: 10,
  //       // notice the gap in the data and the spanGaps: true
  //       data: [65, 59, 80, 81, 56, 55, 40, 60, 55, 30, 78],
  //       spanGaps: true,
  //     },
  //     {
  //       label: "Stock B",
  //       fill: true,
  //       lineTension: 0.1,
  //       backgroundColor: "rgba(167,105,0,0.4)",
  //       borderColor: "rgb(167, 105, 0)",
  //       borderCapStyle: "butt",
  //       borderDash: [],
  //       borderDashOffset: 0.0,
  //       borderJoinStyle: "miter",
  //       pointBorderColor: "white",
  //       pointBackgroundColor: "black",
  //       pointBorderWidth: 1,
  //       pointHoverRadius: 8,
  //       pointHoverBackgroundColor: "brown",
  //       pointHoverBorderColor: "yellow",
  //       pointHoverBorderWidth: 2,
  //       pointRadius: 4,
  //       pointHitRadius: 10,
  //       // notice the gap in the data and the spanGaps: false
  //       data: [10, 20, 60, 95, 64, 78, 90, 70, 40, 70, 89],
  //       spanGaps: false,
  //     },
  //   ],
  // };

  const lineData = {
    labels: labelsDate,
    datasets: [
      {
        label: "Gross Profits",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "green",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataProfit,
      },
      {
        label: "Expenses",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "orange",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataExpenses,
      },
      {
        label: "Revenue",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "red",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataRevenue,
      },
    ],
  };

  //   const pieDataProfit = {
  //     labels: labelsDate,
  //     datasets: [
  //       {
  //         data: dataProfit,
  //         backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#008000"],
  //         hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#008000"],
  //       },
  //     ],
  //   };

  const options = {
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Amount (USD)",
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Quarterly Statements",
          },
        },
      ],
    },
  };
  return (
    <div>
      <div className="charts-wrapper">
        <div>
          <h3>Tesla, Inc. - Quarterly Statements 2019-2017</h3>
        </div>
      </div>
      <Line data={lineData} options={options} />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    chosenOrg: state.buttonRed.chosenOrg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonChoice: (chosenOrganization) =>
      dispatch(actionCreators.buttonChosen(chosenOrganization)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartPage);
