const { Router } = require("express");
const messagesController = require("../controllers/messagesController.js");

const newMessageRouter = Router();

newMessageRouter.get("/", (_req, res) => {
  res.render("pages/form", { title: "New Message", error: null });
});

newMessageRouter.post("/", messagesController.messageAddPost);

module.exports = newMessageRouter;
