// used to create server

/**
 * SCHEMA => it tells DB in which format data is stored in DB
 * MODEL => it is used to perform any CRUD operation in DB
 */

const express = require("express");
const noteModel = require("./models/notes.model");

const app = express();

/**
 * POST /notes
 * req.body => {title, description}
 */

// it is required as until it is written data will not come in req.body from frontend
// it is middleware
app.use(express.json());

app.post("/notes", async (req, res) => {
  const { title, description } = req.body;

  const note = await noteModel.create({
    title,
    description,
  });

  res.status(201).json({
    message: "Note created successfully",
    note,
  });
});

module.exports = app;

// crud 1:09
