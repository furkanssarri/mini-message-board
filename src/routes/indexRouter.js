const { Router } = require("express");
const indexRouter = Router();
const messagesController = require("../controllers/messagesController.js");

indexRouter.get("/", messagesController.messagesGet);

indexRouter.get("/messages/:messageId", messagesController.messageGet);

indexRouter.post(
  "/messages/:messageId/delete",
  messagesController.messageDeletePost,
);

module.exports = indexRouter;
