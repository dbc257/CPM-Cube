const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());

app.use(bodyParser.json());

const lineDataRouter = require("./routes/line");
app.use("/line", lineDataRouter);
const pieDataRouter = require("./routes/pie");
app.use("/pie", pieDataRouter);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}...`);
});
