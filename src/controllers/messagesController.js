const db = require("../db.js");

exports.messagesGet = async (_req, res) => {
  try {
    const messages = await db.getMessages();
    res.render("pages/index", { title: "Home", messages: messages });
  } catch (err) {
    console.error(err);
  }
};

exports.messageGet = async (req, res) => {
  try {
    const { messageId } = req.params;
    const message = await db.getMessage(messageId);
    res.render("pages/message-details", {
      title: "Message Details",
      message: message,
    });
  } catch (err) {
    console.error(err);
  }
};

exports.messageAddPost = async (req, res) => {
  try {
    const { user, text } = req.body;
    if (!text || !user || text.trim() === "" || user.trim() === "") {
      return res.status(400).render("pages/form", {
        title: "New Message",
        error: "Please fill out the required form fields.",
      });
    }

    await db.addNewMessage({ user, text });
    res.redirect("/");
  } catch (err) {
    console.error(err);
  }
};

exports.messageDeletePost = async (req, res) => {
  try {
    const { messageId } = req.params;
    await db.deleteMessage(messageId);
    res.redirect("/");
  } catch (err) {
    console.error(err);
  }
};
