const { format } = require("date-fns");

const messages = [
  {
    id: crypto.randomUUID(),
    text: "Hi there!",
    user: "Amando",
    added: format(new Date(), "dd-MMM-yyyy"),
  },
  {
    id: crypto.randomUUID(),
    text: "Hello, world!",
    user: "Charles",
    added: format(new Date(), "dd-MMM-yyyy"),
  },
];

module.exports = messages;
