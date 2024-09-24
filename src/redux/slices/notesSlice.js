import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
};

const notesSlice = createSlice({
  name: "Notes",
  initialState,
  reducers: {
    handleAddNotes: (state, action) => {
      if (state.notes.length > 0) {
        state.notes.push(action.payload);
      } else {
        state.notes = action.payload;
      }
    },

    handleDeleteNotes: (state, action) => {
      if (state.notes) {
        state.notes = state.notes.filter((note) => note.id !== action.payload);
      }

      if (state.search) {
        state.search = state.search.filter(
          (note) => note.id !== action.payload
        );  
      }
    },

    handleArchivedNotes: (state, action) => {
      state.notes.map((note) => {
        if (note.id === action.payload) {
          if (!note.archived) {
            note.archived = true;
          }
        }

        state.search.map((note) => {
          if (note.id === action.payload) {
            if (!note.archived) {
              note.archived = true;
            }
          }
        });
      });
    },

    handleUnArchivedNotes: (state, action) => {
      state.notes.map((note) => {
        if (note.id === action.payload) {
          if (note.archived) {
            note.archived = false;
          }
        }
      });

      state.search.map((note) => {
        if (note.id === action.payload) {
          if (note.archived) {
            note.archived = false;
          }
        }
      });
    },

    handleSearchNotes: (state, action) => {
      const searchKey = action.payload.toLowerCase();
      if (state.notes.length > 0) {
        state.search = state.notes.filter((fill) => {
          return fill.title.toLowerCase().includes(searchKey);
        });
      }

      if (action.payload === "") state.search = [];
    },
  },
});

export const {
  handleAddNotes,
  handleDeleteNotes,
  handleArchivedNotes,
  handleUnArchivedNotes,
  handleSearchNotes,
} = notesSlice.actions;
export default notesSlice.reducer;
