import { useState } from "react";
import "./App.css";
import Header from "./components/header/Index";
import Notes from "./components/task/Index";

function App() {
  const [dataNotes, setDataNotes] = useState({
    notes: [
      {
        id: 1,
        title: "Babel",
        body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
        createdAt: "2022-04-14T04:27:34.572Z",
        archived: false,
      },
      {
        id: 2,
        title: "Functional Component",
        body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
        createdAt: "2022-04-14T04:27:34.572Z",
        archived: false,
      },
      {
        id: 3,
        title: "Modularization",
        body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
        createdAt: "2022-04-14T04:27:34.572Z",
        archived: false,
      },
      {
        id: 4,
        title: "Lifecycle",
        body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
        createdAt: "2022-04-14T04:27:34.572Z",
        archived: false,
      },
      {
        id: 5,
        title: "ESM",
        body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
        createdAt: "2022-04-14T04:27:34.572Z",
        archived: false,
      },
      {
        id: 6,
        title: "Module Bundler",
        body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
        createdAt: "2022-04-14T04:27:34.572Z",
        archived: false,
      },
    ],
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
