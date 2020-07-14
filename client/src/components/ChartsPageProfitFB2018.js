import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { connect } from "react-redux";
import * as actionCreators from "../store/creators/actionCreators";
// var createReactClass = require("create-react-class");

function ChartPage(props) {
  const [financials, setFinancials] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     `https://financialmodelingprep.com/api/v3/income-statement/${props.chosenOrg}?period=quarter&apikey=316fd425966e8b9f689229fdcbdeaa77`
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setFinancials(result);
  //       fetch("http://localhost:3001/chart-data", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(result),
  //       });
  //     });
  // }, [props.chosenOrg]);

  useEffect(() => {
    fetch("http://localhost:3001/facebook/charts-profit-fb2018")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setFinancials(result);
      });
  }, []);

  const labelsDate = financials.map((financeDate) => {
    // console.log(new Date(financeDate.date).getFullYear());
    // console.log(new Date(financeDate.date));
    return financeDate.date;
  });
  // const dataRevenue = financials.map((financeRevenue) => {
  //   return financeRevenue.revenue;
  // });

  // const dataExpenses = financials.map((financeExpenses) => {
  //   return financeExpenses.costAndExpenses;
  // });

  const dataProfit = financials.map((financeProfit) => {
    return financeProfit.grossProfit;
  });
  // const orgSymbol = financials.map((financeSymbol) => {
  //   return financeSymbol.symbol;
  // });

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

  const barDataProfit = {
    labels: labelsDate,
    datasets: [
      {
        label: "Gross Profits",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: dataProfit,
      },
    ],
  };

  const lineDataProfit = {
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
        data: dataProfit,
      },
    ],
  };

  const pieDataProfit = {
    labels: labelsDate,
    datasets: [
      {
        data: dataProfit,
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
          <h2>Facebook - Quarterly Statement Profits for 2018</h2>
        </div>
      </div>
      {/* <Bar data={barDataRevenue} options={optionsFB} /> */}
      {/* <Bar data={barDataRevenue} options={options} width={3} height={1} /> */}
      {/* <Bar data={barDataExpenses} options={optionsFB} /> */}
      {/* <Bar data={barDataExpenses} options={options} width={3} height={1} /> */}
      <Bar data={barDataProfit} options={options} />
      <Line data={lineDataProfit} options={options} />
      <Pie data={pieDataProfit} options={options} />
      {/* <Bar data={barDataProfit} options={options} width={3} height={1} /> */}
      {/* <Bar
        data={barDataProfitFB}
        options={optionsFB}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false,
        }}
      /> */}
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
