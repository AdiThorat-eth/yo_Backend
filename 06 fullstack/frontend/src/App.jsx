import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editedDescriptions, setEditedDescriptions] = useState({});

  console.log("hi");

  const fetchNotes = () => {
    axios.get("http://localhost:3000/api/notes").then((res) => {
      setNotes(res.data.notes);
    });
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description } = e.target;
    console.log(title.value, description.value);

    axios
      .post("http://localhost:3000/api/notes", {
        title: title.value,
        description: description.value,
      })
      .then((res) => {
        console.log(res.data);
        // after creating note note will not appear in list so we have to call
        // fetchNotes again to get updated list of notes
        fetchNotes();
      });
  };

  const handleDeleteNote = (noteId) => {
    axios.delete(`http://localhost:3000/api/notes/${noteId}`).then((res) => {
      console.log(res.data);
      // after deleting note note will not appear in list so we have to call
      // fetchNotes again to get updated list of notes
      fetchNotes();
    });
  };

  const addDescrip = (noteId) => {
    axios
      .patch(`http://localhost:3000/api/notes/${noteId}`, {
        description: editedDescriptions[noteId],
      })
      .then((res) => {
        console.log(res.data);

        fetchNotes();

        setEditedDescriptions({
          ...editedDescriptions,
          [noteId]: "",
        });
      });
  };

  return (
    <>
      <form className="flex gap-4 p-2" onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="Enter title" />
        <input name="description" type="text" placeholder="Enter description" />
        <button className="bg-white" type="submit">
          Create Note
        </button>
      </form>
      <div className="notes py-4 px-12 flex gap-4 flex-wrap">
        {notes.map((note) => {
          return (
            <div
              className="note bg-[#494949] p-[1rem] rounded-md max-w-[20rem] text-white flex flex-col gap-2"
              key={note._id}
            >
              <h1 className="text-2xl font-bold">{note.title}</h1>
              <p>{note.description}</p>
              <button
                onClick={() => {
                  handleDeleteNote(note._id);
                }}
                className="bg-red-500 text-white"
              >
                Delete
              </button>

              <button
                onClick={() => {
                  addDescrip(note._id);
                }}
                className="bg-blue-400 text-white"
              >
                Modify description
              </button>
              <input
                className="text-black text-center"
                type="text"
                placeholder="enter new description"
                value={editedDescriptions[note._id]}
                onChange={(e) =>
                  setEditedDescriptions({
                    ...editedDescriptions,
                    [note._id]: e.target.value,
                  })
                }
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
