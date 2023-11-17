const express = require("express");
const port = require("./port");

const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.send({
    message: "hello word",
  });
});

app.listen(port, () => {
  console.log("App runing on 3000 port");
});

module.exports = app;
