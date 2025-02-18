import { useSelector } from "react-redux";
import ToDoInputForm from "./ToDoInputForm";
import ToDoList from "./ToDoList";
import ToDoFooterContainer from "./ToDoFooterContainer";

const ToDoContainer = () => {
  const todos = useSelector((state: any) => state.todos);

  return (
    <div className="container">
      <h1>ToDo App</h1>
      <ToDoInputForm />
      <ToDoList todos={todos} />
      <ToDoFooterContainer />
    </div>
  );
};

export default ToDoContainer;
