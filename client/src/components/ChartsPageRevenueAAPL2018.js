import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { connect } from "react-redux";
import * as actionCreators from "../store/creators/actionCreators";
import "./ChartsPage.css";

function ChartPage(props) {
  const [financials, setFinancials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/apple/charts-revenue-aapl2018")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setFinancials(result);
      });
  }, []);

  const labelsDate = financials.map((financeDate) => {
    return financeDate.date;
  });

  const dataRevenue = financials.map((financeRevenue) => {
    return financeRevenue.revenue;
  });

  //   const dataExpenses = financials.map((financeExpenses) => {
  //     return financeExpenses.costAndExpenses;
  //   });

  //   const dataProfit = financials.map((financeProfit) => {
  //     return financeProfit.grossProfit;
  //   });

  const barDataRevenue = {
    labels: labelsDate,
    datasets: [
      {
        label: "Revenue",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: dataRevenue,
      },
    ],
  };

  //   const barDataExpenses = {
  //     labels: labelsDate,
  //     datasets: [
  //       {
  //         label: "Expenses",
  //         backgroundColor: "rgba(255,99,132,0.2)",
  //         borderColor: "rgba(255,99,132,1)",
  //         borderWidth: 1,
  //         hoverBackgroundColor: "rgba(255,99,132,0.4)",
  //         hoverBorderColor: "rgba(255,99,132,1)",
  //         data: dataExpenses,
  //       },
  //     ],
  //   };

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

  const lineDataRevenue = {
    labels: labelsDate,
    datasets: [
      {
        label: "Gross Profits",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
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

  const pieDataRevenue = {
    labels: labelsDate,
    datasets: [
      {
        data: dataRevenue,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#008000"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#008000"],
      },
    ],
  };

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
          <h2>Apple, Inc. - Quarterly Statement Expenses for 2018</h2>
        </div>
      </div>
      <Bar data={barDataRevenue} options={options} />
      <Line data={lineDataRevenue} options={options} />
      <Pie data={pieDataRevenue} options={options} />
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
