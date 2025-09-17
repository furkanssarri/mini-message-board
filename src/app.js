require("dotenv").config();
const path = require("node:path");
const express = require("express");
const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");
const app = express();

const PORT = process.env.PORT || 5000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newMessageRouter);

app.listen(PORT, () => {
  console.log(`Listening the server on port ${PORT}`);
});
