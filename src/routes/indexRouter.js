const { Router } = require("express");
const indexRouter = Router();
const messages = require("../db.js");

indexRouter.get("/", (_req, res) => {
  res.render("pages/index", { title: "Home", messages: messages });
});

indexRouter.get("/messages/:messageId", (req, res) => {
  const { messageId } = req.params;
  const message = messages.find((message) => message.id === messageId);
  res.render("pages/message-details", {
    title: "Message Details",
    message: message,
  });
});

module.exports = indexRouter;
