const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (_req, res) => {
  res.render("pages/index", { title: "Home" });
});

module.exports = indexRouter;
