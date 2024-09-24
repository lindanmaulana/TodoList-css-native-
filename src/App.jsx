import { useState } from "react";
import "./App.css";
import Header from "./components/header/Index";
import Notes from "./components/task/Index";
import { getInitialData } from "./utils";

function App() {
  const [dataNotes, setDataNotes] = useState({
    notes: getInitialData(),
    search: [],
  });

  const handleAddNotes = (data) => {
    setDataNotes((note) => ({
      ...note,
      notes: [...note.notes, data],
    }));
  };

  const handleDeleteNotes = (id) => {
    setDataNotes((note) => ({
      ...note,
      notes: note.notes.filter((fill) => fill.id !== id),
      search: note.search.filter((fill) => fill.id !== id),
    }));
  };

  const handleArchivedNotes = (id) => {
    setDataNotes((note) => ({
      ...note,
      notes: note.notes.map((value) => {
        if (value.id === id) {
          return { ...value, archived: true };
        }

        return value;
      }),

      search: note.search.map((value) => {
        if (value.id === id) {
          return { ...value, archived: true };
        }

        return value;
      }),
    }));
  };

  const handleUnArchivedNotes = (id) => {
    setDataNotes((note) => ({
      ...note,
      notes: note.notes.map((value) => {
        if (value.id === id) {
          return { ...value, archived: false };
        }

        return value;
      }),
      search: note.search.map((value) => {
        if (value.id === id) {
          return { ...value, archived: false };
        }

        return value;
      }),
    }));
  };

  const handleSearchNotes = (key) => {
    const keyword = key.toLowerCase();
    if (dataNotes.notes.length > 0) {
      setDataNotes((note) => ({
        ...note,
        search: note.notes.filter((fill) =>
          fill.title.toLowerCase().includes(keyword)
        ),
      }));
    }
  };

  const handleResetSearchNotes = () => {
    setDataNotes((note) => ({
      ...note,
      search: [],
    }));
  };

  const handle = {
    handleAddNotes,
    handleArchivedNotes,
    handleUnArchivedNotes,
    handleDeleteNotes,
    handleSearchNotes,
    handleResetSearchNotes,
  };
  return (
    <div className="notes-app">
      <Header handle={handle} />
      <Notes handle={handle} dataNotes={dataNotes} />
    </div>
  );
}

export default App;
