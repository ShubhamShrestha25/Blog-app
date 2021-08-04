const express = require("express");
const app = express();

app.use("/gg", (req, res) => {
  console.log("Hii");
});

app.listen("5000", () => {
  console.log("Backend is running");
});
