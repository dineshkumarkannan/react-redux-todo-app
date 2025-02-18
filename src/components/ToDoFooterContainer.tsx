import { useSelector } from "react-redux";

const ToDoFooterContainer = () => {
  const todos = useSelector((state: any) => state.todos);
  const completedTodos = todos.filter((todo: any) => todo.completed).length;
  return (
    <section className="footer-container">
      <h3>Totoal : {todos.length}</h3>
      <h3>Completed : {completedTodos}</h3>
    </section>
  );
};

export default ToDoFooterContainer;
