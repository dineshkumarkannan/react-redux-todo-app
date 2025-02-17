import { createSlice } from "@reduxjs/toolkit";

const INIT_TODO = [
  {
    id: 1,
    title: "ToDo 1",
    completed: false,
  },
  {
    id: 2,
    title: "ToDo 2",
    completed: false,
  },
  {
    id: 3,
    title: "ToDo 3",
    completed: false,
  },
];

const toDoSlice = createSlice({
  name: "todo",
  initialState: INIT_TODO,
  reducers: {
    add_todo: (state, action) => {
      const newTodo: { title: string; id: number; completed: boolean } = {
        title: "",
        id: 0,
        completed: false,
      };
      newTodo.title = action.payload.title;
      newTodo.id = Date.now();
      newTodo.completed = false;
      state.push(newTodo);
    },
    toggle_todo: (state, action) => {
      const index: number = state.findIndex(
        (val) => val.id === action.payload.id
      );
      state[index].completed = !state[index].completed;
    },
    delete_todo: (state, action) => {
      console.log(action);
      return state.filter((val) => val.id !== action.payload.id);
    },
  },
});

export default toDoSlice.reducer;

export const { add_todo, toggle_todo, delete_todo } = toDoSlice.actions;
