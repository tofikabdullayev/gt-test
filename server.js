const express = require("express");

const app = express();

app.use(express.static("./dist/gt-test-task"));

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/gt-test-task/" })
);

app.listen(process.env.PORT || 8080);
