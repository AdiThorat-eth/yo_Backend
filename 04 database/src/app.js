// app.js is used to create and config server

const express = require("express");

// server instance is created
const app = express();
// middleware
app.use(express.json());

const notes = [];

app.post("/notes", (req, res) => {
  notes.push(req.body);

  // status code is used to indicate the status of the request
  res.status(201).json({
    message: "note created",
  });
});

app.get("/notes", (req, res) => {
  res.status(200).json({
    notes: notes,
  });
});

app.delete("/notes/:id", (req, res) => {
  delete notes[req.params.id];
  res.status(200).json({
    message: "note deleted",
  });
});

app.patch("/notes/:id", (req, res) => {
  notes[req.params.id].description = req.body.description;
  res.status(200).json({
    message: "notes updated",
  });
});

module.exports = app;
