const express = require("express");
const app = express();
const api = require("./src/server/api");

app.use("/api", api);
// For any other route (URL) just send an error
app.get("*", (req, res) => {
  res.send({ error: "No route defined" });
});


module.exports = app;