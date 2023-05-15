const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("hello"));
app.get("/hello:name", (req, res) => {
  const name = req.params.name;
  res.send(`hello, ${name}!`);
});
app.get("/:number", (req, res) => {
  const number = req.params.number;
  res.send(`${number * 2}`);
});
app.listen(8083, () => console.log("Server is connected"));
