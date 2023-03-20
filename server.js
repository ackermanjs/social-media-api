const express = require("express");
const routes = require("./routes");
const connect = require("./config/connection.js").start();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log("Connected to localhost:" + PORT);
});
