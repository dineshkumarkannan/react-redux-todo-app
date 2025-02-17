import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./feature/todoSlice";

const store = configureStore({
  reducer: {
    todos: toDoReducer,
  },
});

export default store;
