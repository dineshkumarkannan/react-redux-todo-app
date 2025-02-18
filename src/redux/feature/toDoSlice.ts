import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const INIT_TODO = [
//   {
//     id: 1,
//     title: "ToDo 1",
//     completed: false,
//   },
//   {
//     id: 2,
//     title: "ToDo 2",
//     completed: false,
//   },
//   {
//     id: 3,
//     title: "ToDo 3",
//     completed: false,
//   },
// ];

export const fetchToDosAsync = createAsyncThunk(
  "todo/fetchToDosAsync",
  async () => {
    const respose = await fetch("http://localhost:4200/todos");
    const todos = await respose.json();
    return {
      todos,
    };
  }
);

export const addToDoAsync = createAsyncThunk(
  "todo/addToDoAsync",
  async (payload: any) => {
    const respose = await fetch("http://localhost:4200/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: payload.title }),
    });
    if (respose.ok) {
      const newTodo = await respose.json();
      return { newTodo };
    }
  }
);

export const toggleTodoAsync = createAsyncThunk(
  "todo/toggleTodoAsync",
  async (payload: any) => {
    const respose = await fetch(`http://localhost:4200/todos/${payload.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: payload.completed }),
    });
    if (respose.ok) {
      const newTodo = await respose.json();
      return { id: newTodo.id, completed: newTodo.completed };
    }
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todo/deleteTodoAsync",
  async (payload: any) => {
    const respose = await fetch(`http://localhost:4200/todos/${payload?.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (respose.ok) {
      const todos = await respose.json();
      return { todos };
    }
  }
);

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const toDoSlice = createSlice({
  name: "todo",
  initialState: [] as Todo[],
  reducers: {
    add_todo: (state: any, action) => {
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
    toggle_todo: (state: Todo[], action) => {
      const index: number = state.findIndex(
        (val: any) => val.id === action.payload.id
      );
      state[index].completed = !state[index].completed;
    },
    delete_todo: (state, action) => {
      console.log(action);
      return state.filter((val: any) => val.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchToDosAsync.pending, (state: Todo[], action: any) => {
      console.log("Fetching data...");
    });
    builder.addCase(fetchToDosAsync.fulfilled, (state: Todo[], action: any) => {
      console.log("Fetched data...");
      return action.payload.todos;
    });
    builder.addCase(
      fetchToDosAsync.rejected,
      (state: Todo[], action: any) => {}
    );
    builder.addCase(addToDoAsync.fulfilled, (state, action) => {
      state.push(action.payload?.newTodo);
    });
    builder.addCase(toggleTodoAsync.fulfilled, (state: Todo[], action) => {
      const index: number = state.findIndex(
        (val: any) => val.id === action?.payload?.id
      );
      state[index].completed = action?.payload?.completed;
    });
    builder.addCase(deleteTodoAsync.fulfilled, (state: Todo[], action) => {
      return action.payload?.todos;
    });
  },
});

export default toDoSlice.reducer;

export const { add_todo, toggle_todo, delete_todo } = toDoSlice.actions;
