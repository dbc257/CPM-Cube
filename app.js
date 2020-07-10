const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const models = require("./models");
const auth = require("./middlewares/authMiddleware.js");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

app.use(cors());
app.use(bodyParser.json());

let router = express.Router();
router.use(bodyParser.json());

const lineDataRouter = require("./routes/line");
app.use("/api/line", lineDataRouter);
const pieDataRouter = require("./routes/pie");
app.use("/api/pie", pieDataRouter);
const hBarDataRouter = require("./routes/h-bar");
app.use("/api/h-bar", hBarDataRouter);
const BarDataRouter = require("./routes/bar");
app.use("/api/bar", BarDataRouter);
const FinanceDataRouter = require("./routes/finance");
app.use("/api/finance", FinanceDataRouter);

// POST route to register a new user account
app.post("/register", (req, res) => {
  let username = req.body.username;
  let password = bcrypt.hashSync(req.body.password, 10);
  models.User.findOne({
    where: {
      username: username,
    },
  }).then((user) => {
    if (user) {
      res.send({ message: "Error: Username has already been used!" });
    } else {
      models.User.create({ username: username, password: password }).then(
        (user) => {
          if (user) {
            res.send({
              message:
                "You are Registered! Now, you can click the blue panel named 'Login' to input your username and password.",
            });
          } else {
            res.send({ message: "Error: Unable to create user!" });
          }
        }
      );
    }
  });
});

module.exports = router;

app.post("/api/login", (req, res) => {
  console.log(req.body);
  let username = req.body.username;
  let password = req.body.password;
  let userArray = [];
  models.User.findOne({
    where: {
      username: username,
    },
  })
    .then((user) => {
      userArray.push(user);
    })
    .then(() => {
      // find if the username and password exists in the users array
      const persistedUser = userArray.find((user) => {
        return user.username == username;
      });
      if (persistedUser == null) {
        res.json({ message: "Username not found!", success: false });
      } else {
        if (persistedUser) {
          if (bcrypt.compareSync(password, persistedUser.password)) {
            const token = jwt.sign({ username: username }, "keyboard cat");
            console.log(token);
            res.json({
              message: "You are now logged in! ",
              success: true,
              token: token,
            });
          }
        } else {
          console.log("false");
          // user does not exists maybe username or password are wrong
          res.json({ message: "Oops, there was an error!", success: false });
        }
      }
    });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is up and running on port http://localhost:${port} ...`);
});
