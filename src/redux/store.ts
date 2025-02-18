import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../redux/feature/toDoSlice";

const store = configureStore({
  reducer: {
    todos: toDoReducer,
  },
});

export default store;
