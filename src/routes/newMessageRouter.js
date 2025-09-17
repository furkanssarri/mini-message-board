const { Router } = require("express");

const newMessageRouter = Router();

newMessageRouter.get("/", (_req, res) => {
  res.send("New Message Form Here.");
});

module.exports = newMessageRouter;
