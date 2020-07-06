const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const FinanceDBRouter = require("./routes/api");
app.use("/", FinanceDBRouter);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}...`);
});
