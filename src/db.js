const pool = require("./db/pool.js");

async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessage(id) {
  const { row } = await pool.query("SELECT * FROM messages WHERE id=($1)", [
    id,
  ]);
  return row;
}

async function addNewMessage({ user, text }) {
  await pool.query('INSERT INTO messages (text, "user")VALUES ($1, $2)', [
    user,
    text,
  ]);
}

async function deleteMessage(id) {
  await pool.query("DELETE FROM messages WHERE id = ($1)", [id]);
}

module.exports = {
  getMessages,
  getMessage,
  addNewMessage,
  deleteMessage,
};
