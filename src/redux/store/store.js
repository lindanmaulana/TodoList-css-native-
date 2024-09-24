import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "../slices/notesSlice";

const store = configureStore({
    reducer: {
        notes: notesSlice
    }
})

export default store