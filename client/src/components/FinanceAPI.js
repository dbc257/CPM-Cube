import React, { useEffect, useState } from "react";

function FinanceList(props) {
  const [financials, setFinancials] = useState([]);

  useEffect(() => {
    fetch(
      "https://financialmodelingprep.com/api/v3/income-statement/FB?period=quarter&apikey=ebfb009cc4e9d8c8309b0ce2cf086c63"
    )
      .then((response) => response.json())
      .then((result) => {
        setFinancials(result);
      });
  }, []);

  const financeItems = financials.map((financeItem) => {
    return (
      <li>
        {"Date:"} {financeItem.date},{" Revenue:"} {financeItem.revenue},{" "}
        {"USD"},{" Expenses:"} {financeItem.costAndExpenses} {"USD"},
        {" Gross Profit:"} {financeItem.grossProfit} {"USD"},
      </li>
    );
  });

  return <ul>{financeItems}</ul>;
}

export default FinanceList;
