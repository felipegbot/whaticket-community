//simple express server to run frontend production build;
const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "build")));

app.get("/env-vars", (req, res) => {
  res.json({
    REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL,
  });
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(3333);
