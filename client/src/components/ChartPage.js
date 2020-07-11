import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";
import * as actionCreators from "../store/creators/actionCreators";
// var createReactClass = require("create-react-class");

function ChartPage(props) {
  const [financials, setFinancials] = useState([]);

  useEffect(() => {
    fetch(
      `https://financialmodelingprep.com/api/v3/income-statement/${props.chosenOrg}?period=quarter&apikey=ebfb009cc4e9d8c8309b0ce2cf086c63`
    )
      .then((response) => response.json())
      .then((result) => {
        setFinancials(result);
      });
  }, [props.chosenOrg]);

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
  // const orgSymbol = financials.map((financeSymbol) => {
  //   return financeSymbol.symbol;
  // });

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
      {/* <Bar data={barDataRevenueFB} options={optionsFB} /> */}
      <Bar data={barDataRevenue} options={options} width={3} height={1} />
      {/* <Bar data={barDataExpensesFB} options={optionsFB} /> */}
      <Bar data={barDataExpenses} options={options} width={3} height={1} />
      {/* <Bar data={barDataProfit} options={options} /> */}
      <Bar data={barDataProfit} options={options} width={3} height={1} />
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
//   const financeItems = financials.map((financeItem) => {

//   <li>
//     {"Gross Profit:"} {financeItem.grossProfit} {"USD"},{" Revenue:"}{" "}
//     {financeItem.revenue}
//     {"USD"},{" Operating Income:"} {financeItem.operatingIncome}
//     {"USD"}
//   </li>

//   );

//   return <ul>{financeItems}</ul>;
// }

// import { connect } from "react-redux";
// export default createReactClass({
//     displayName: "BarExample",

//     render() {
//       return (
//         <div>
//           <h2>Bar Example</h2>
//           <Bar data={this.props.barData} options={options} />
//         </div>
//       );
//     },
//   });

// import { Bar } from "react-chartjs-2";

// var createReactClass = require("create-react-class");

// const barData = {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//       {
//         label: "My First dataset",
//         backgroundColor: "rgba(255,99,132,0.2)",
//         borderColor: "rgba(255,99,132,1)",
//         borderWidth: 1,
//         hoverBackgroundColor: "rgba(255,99,132,0.4)",
//         hoverBorderColor: "rgba(255,99,132,1)",
//         data: [65, 59, 80, 81, 56, 55, 40],
//       },
//     ],
//   };

// const options = {
//   scales: {
//     yAxes: [
//       {
//         scaleLabel: {
//           display: true,
//           labelString: "Dollar Amount",
//         },
//       },
//     ],
//     xAxes: [
//       {
//         scaleLabel: {
//           display: true,
//           labelString: "Month",
//         },
//       },
//     ],
//   },
// };

// export default createReactClass({
//   displayName: "BarExample",

//   render() {
//     return (
//       <div>
//         <h2>Bar Example</h2>
//         <Bar data={this.props.barData} options={options} />
//       </div>
//     );
//   },
// });
