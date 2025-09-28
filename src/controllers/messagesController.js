const { format } = require("date-fns");
const db = require("../db.js");

exports.messagesGet = async (_req, res) => {
  try {
    const messages = await db.getMessages();
    // Format each message's timestamp
    const formattedMessages = messages.map((msg) => ({
      ...msg,
      added: format(new Date(msg.added), "dd/MM/yyyy"),
    }));
    res.render("pages/index", { title: "Home", messages: formattedMessages });
  } catch (err) {
    console.error(err);
  }
};

exports.messageGet = async (req, res) => {
  try {
    const id = parseInt(req.params.messageId, 10);
    if (isNaN(id)) return res.status(400).send("Invalid message id");

    const message = await db.getMessage(id);
    if (!message) return res.status(404).send("Message not found");

    res.render("pages/message-details", { title: "Message", message });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
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
