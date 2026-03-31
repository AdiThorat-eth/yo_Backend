// app.js is used to create and config server

const express = require("express");

// server instance is created
const app = express();
// middleware
app.use(express.json());

const notes = [
  //   {
  //     title: "title_1",
  //     description: "description_1",
  //   },
];

app.get("/", (req, res) => {
  res.send("yo");
});

app.post("/notes", (req, res) => {
  //   console.log(req.body);
  notes.push(req.body);
  console.log(notes);
  res.send("note created");
});

app.get("/notes", (req, res) => {
  res.send(notes);
});

// this is dynamic value due to :id
app.delete("/notes/:id", (req, res) => {
  // req.params is used when data is small
  // req.body is used when data is large
  // console.log(req.params.id);

  delete notes[req.params.id];
  res.send("note deleted");
});

app.patch("/notes/:id", (req, res) => {
  notes[req.params.id].description = req.body.description;
  res.send("note updated");
});

module.exports = app;
