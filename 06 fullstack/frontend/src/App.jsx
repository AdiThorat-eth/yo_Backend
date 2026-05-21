import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([
    // {
    //   title: "test title 1",
    //   description: "test description 1",
    // },
    // {
    //   title: "test title 2",
    //   description: "test description 2",
    // },
    // {
    //   title: "test title 3",
    //   description: "test description 3",
    // },
    // {
    //   title: "test title 4",
    //   description: "test description 4",
    // },
  ]);

  axios.get("http://localhost:3000/api/notes").then((res) => {
    setNotes(res.data.notes);
  });

  return (
    <div className="notes py-4 px-12 flex gap-4 flex-wrap">
      {notes.map((note) => {
        return (
          <div className="note bg-[#494949] p-[1rem] rounded-md max-w-[20rem] text-white">
            <h1 className="text-2xl font-bold">{note.title}</h1>
            <p>{note.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
