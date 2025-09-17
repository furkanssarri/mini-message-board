require("dotenv").config();
const path = require("node:path");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (_req, res) => {
  res.render("pages/index", { title: "Home" });
});

app.listen(PORT, () => {
  console.log(`Listening the server on port ${PORT}`);
});
