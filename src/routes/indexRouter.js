const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toISOString(),
  },
  {
    text: "Hello, world!",
    user: "Charles",
    added: new Date().toISOString(),
  },
];

indexRouter.get("/", (_req, res) => {
  res.render("pages/index", { title: "Home", messages: messages });
});

module.exports = indexRouter;
