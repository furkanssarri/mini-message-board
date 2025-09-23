# Mini Message Board

## Overview

The **Mini Message Board** is a simple ExpressJS project designed for practice and demonstration purposes. It serves as a lightweight CRUD application to showcase basic backend concepts such as routing, middleware, and server-side processing. The project uses **EJS templates** for rendering HTML and follows a minimal **MVC pattern**, making it an ideal starting point for learning ExpressJS fundamentals.

Key objectives of this project include:

- Practicing **ExpressJS routing** and handling POST/GET requests.
- Rendering dynamic views using **EJS templates**.
- Managing simple data in memory and performing CRUD-like operations.
- Demonstrating a basic **MVC structure** in a small project.

---

## Links

Please find a link to the project [demo](https://mini-message-board-isu9.onrender.com/).

## Dependencies

The project relies on a few essential Node.js packages:

- **express**: Web framework for Node.js, handles routing and middleware.
- **ejs**: Template engine for rendering dynamic HTML pages.
- **date-fns**: Utility library to format and manage dates.
- **crypto**: Built-in Node.js module for generating unique message IDs.
- **dotenv**: Loads environment variables from a `.env` file (used for configurable server settings).

---

## Getting Started

Follow these steps to run the project locally:

1. **Clone the repository**

```bash
git clone <repository-url>
cd mini-message-board
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the server**

From the root directory:

```bash
node src/app.js
```

4. **Navigate to whatever port you specified**

```txt
http://localhost:PORT
```

## Project Structure

The directory tree for the project is as follows:

```txt
mini-message-board/
├── src/
│   ├── app.js
│   ├── db.js
│   ├── routes/
│   │   ├── indexRouter.js
│   │   └── newMessageRouter.js
│   └── views/
│       ├── pages/
│       │   ├── form.ejs
│       │   ├── index.ejs
│       │   └── message-details.ejs
│       └── partials/
│           ├── header.ejs
│           └── footer.ejs
├── package.json
├── package-lock.json
└── README.md
```
