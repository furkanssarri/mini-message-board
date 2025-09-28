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
    const { text, username } = req.body;
    if (!text || !username || text.trim() === "" || username.trim() === "") {
      return res.status(400).render("pages/form", {
        title: "New Message",
        error: "Please fill out the required form fields.",
      });
    }

    await db.addNewMessage({ text, username });
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
