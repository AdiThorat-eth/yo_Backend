const mongoose = require("mongoose");

// here schema for notes is created, schema is used to`define the format
const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
});

// to perform any operation in DB we need model.
const noteModel = mongoose.model("notes", noteSchema);

module.exports = noteModel;
