const { Router } = require("express");
const messages = require("../db.js");
const { format } = require("date-fns");

const newMessageRouter = Router();

newMessageRouter.get("/", (_req, res) => {
  res.render("pages/form", { title: "New Message", error: null });
});

newMessageRouter.post("/", (req, res) => {
  const { user, text } = req.body;

  if (!text || !user || text.trim() === "" || user.trim() === "") {
    return res.status(400).render("pages/form", {
      title: "New Message",
      error: "Please fill out the required form fields.",
    });
  }

  const newMessage = {
    id: crypto.randomUUID(),
    text,
    user,
    added: format(new Date(), "dd-MMM-yyy"),
  };
  messages.push(newMessage);
  res.redirect("/");
});

module.exports = newMessageRouter;
