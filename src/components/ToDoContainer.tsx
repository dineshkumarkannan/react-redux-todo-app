import { useSelector } from "react-redux";
import ToDoInputForm from "./ToDoInputForm";
import ToDoList from "./ToDoList";

// const TODO_LIST = [
//   {
//     id: 1,
//     title: "ToDo 1",
//     completed: false,
//   },
//   {
//     id: 2,
//     title: "ToDo 1",
//     completed: false,
//   },
//   {
//     id: 3,
//     title: "ToDo 1",
//     completed: false,
//   },
// ];

const ToDoContainer = () => {
  const todos = useSelector((state: any) => state.todos);

  return (
    <div className="container">
      <h1>ToDo App</h1>
      <ToDoInputForm />
      <ToDoList todos={todos} />
    </div>
  );
};

export default ToDoContainer;
