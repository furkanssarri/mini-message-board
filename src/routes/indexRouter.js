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

indexRouter.post("/messages/:messageId/delete", (req, res) => {
  const { messageId } = req.params;
  const index = messages.findIndex((msg) => msg.id === messageId);
  if (index !== -1) {
    messages.splice(index, 1);
  }
  res.redirect("/");
});

module.exports = indexRouter;
