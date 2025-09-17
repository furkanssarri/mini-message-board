const { Router } = require("express");

const newMessageRouter = Router();

newMessageRouter.get("/", (_req, res) => {
  res.render("pages/form", { title: "New Message" });
});

newMessageRouter.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = newMessageRouter;
