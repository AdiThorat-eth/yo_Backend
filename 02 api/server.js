const express = require("express");

// server instance is created
const app = express();

// it is middleware that is used to make the server capable to read the json data
app.use(express.json());

const notes = [
  // {
  //   title: "test title 1",
  //   description: "test description 1",
  // },
  // {
  //   title: "test title 2",
  //   description: "test description 2",
  // },
];

app.post("/notes", (req, res) => {
  // the server created by express is not that much capable to read the json data so we use middleware to make it capable to read the json data
  console.log(req.body);
  //push is used to add the data into the notes array
  notes.push(req.body);
  res.send("note created");
});

app.get("/notes", (req, res) => {
  res.send(notes);
});

// It will start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
