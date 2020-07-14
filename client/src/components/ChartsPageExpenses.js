import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
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
    fetch("http://localhost:3001/fb-profit-charts-2019")
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

  const dataExpenses = financials.map((financeExpenses) => {
    return financeExpenses.costAndExpenses;
  });

  //   const dataProfit = financials.map((financeProfit) => {
  //     return financeProfit.grossProfit;
  //   });
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

  const barDataExpenses = {
    labels: labelsDate,
    datasets: [
      {
        label: "Expenses",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: dataExpenses,
      },
    ],
  };

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
      <h2>{props.chosenOrg}</h2>
      {/* <Bar data={barDataRevenue} options={options} /> */}
      {/* <Bar data={barDataRevenue} options={options} width={3} height={1} /> */}
      <Bar data={barDataExpenses} options={options} />
      {/* <Bar data={barDataExpenses} options={options} width={3} height={1} /> */}
      {/* <Bar data={barDataProfit} options={options} /> */}
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
