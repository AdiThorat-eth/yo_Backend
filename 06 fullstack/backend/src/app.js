// server creation
// npm run build is used to make dist folder which contains all the frontend build files

const express = require("express")
const noteModel = require("./models/note.model")
const cors = require("cors")
const path = require("path")

const app = express()

// middleware
app.use(cors())
app.use(express.json())
// it is used to make all files inside public folder publically available 
app.use(express.static("./public"))

/**
 * POST - /api/notes
 * create new note and save data in mongoDB
 */
app.post("/api/notes", async (req, res) => {
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

/**
 * GET - /api/notes
 * get all notes from mongoDB
 */
app.get("/api/notes", async (req, res) => {
    const notes = await noteModel.find();

    res.status(200).json({
        message: "Notes fetched successfully",
        notes,
    })
})

/**
 * DELETE /api/notes/:id
 * delete a note using id from req.param
 */
app.delete("/api/notes/:id", async (req, res) => {
    const id = req.params.id
    await noteModel.findByIdAndDelete(id);

    res.status(200).json({
        message: "Note deleted successfully",
    })
})

/**
 * PATCH - /api/notes/:id
 * update a note using id from req.param
 */
app.patch("/api/notes/:id", async (req, res) => {
    const id = req.params.id
    const { description } = req.body

    await noteModel.findByIdAndUpdate(id, { description })

    res.status(200).json({
        message: "Note updated successfully",

    })
})

// this * means this is wild card route means if any user send any request to route which is not defined in above routes then it will go in this route and execute this code
app.use("*name", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "/public/index.html"))
})

module.exports = app;