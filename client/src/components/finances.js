let FinanceTextBox = document.getElementById("FinanceTextBox");
let SearchButton = document.getElementById("SearchButton");

SearchButton.addEventListener("click", function () {
  let varURL = `https://financialmodelingprep.com/api/v3/income-statement/${FinanceTextBox.value}?period=quarter&apikey=ebfb009cc4e9d8c8309b0ce2cf086c63`;

  fetch(varURL)
    .then((response) => response.json())
    .then((FinancePost) => {
      let description = convertArray(FinancePost.finance[0].description);
      let financeVar = `<ul>
                            <p>Revenue: ${financePosts.name}</p>
                            <p>Net Income: ${netIncome}
                            </ul>`;
      financeList.innerHTML = financeVar;
    })
    .catch((message) => {
      let statement = "Not a company!";
      errorList.innerHTML = statement;
    });
});
