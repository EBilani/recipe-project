const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(express.json());
app.use(cors(corsOptions));
const port = process.env.PORT || 8080;
mongoose
  .connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true })
  .then(() => console.log("connected to db"))
  .catch(err => console.log(`something went wrong ${err.message}`));

const recipe = require("./app/routes/file");
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", recipe);
app.listen(port, () => console.log(`port working on ${port}`));
