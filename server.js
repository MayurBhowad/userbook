const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require("./src/user/user.routes");
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3001;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/root", (req, res) => {
  res.json({ test: true });
});

app.use("/api/v1/user", userRoutes);

app.listen(PORT, () => {
  console.log("App is up and running on port: ", PORT);
});
