import { useDispatch, useSelector } from "react-redux";
import ToDoInputForm from "./ToDoInputForm";
import ToDoList from "./ToDoList";
import ToDoFooterContainer from "./ToDoFooterContainer";
import { useEffect } from "react";
import { fetchToDosAsync } from "../redux/feature/toDoSlice";

const ToDoContainer = () => {
  const dispatch: any = useDispatch();
  const todos = useSelector((state: any) => state.todos);

  useEffect(() => {
    dispatch(fetchToDosAsync());
  }, [dispatch]);
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
