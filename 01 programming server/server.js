const express = require("express");

// server instance is created
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/about", (req, res) => {
  res.send("this is about page");
});

app.get("/home", (req, res) => {
  res.send("this is home page");
});

// It will start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
