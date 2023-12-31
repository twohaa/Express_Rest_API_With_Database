const express = require("express");
const cors = require("cors");
const usersRouter = require("./routes/users.route");
// require("./config/db")


const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//users
app.use("/users", usersRouter);

//home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

//route not found
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found." });
});
//server error
app.use((err, req, res, next) => {
  res.status(500).json({ message: "Something broke." });
});
module.exports = app;
