import { useDispatch } from "react-redux";
import { delete_todo, toggle_todo } from "../redux/feature/todoSlice";

const ToDoItem = ({ todo }: any) => {
  const dispatch = useDispatch();

  return (
    <section
      aria-live="assertive"
      className={
        todo.completed ? "active todo-item-container" : "todo-item-container"
      }
    >
      <div className="todo-inputs-container">
        <input
          type="checkbox"
          checked={todo.completed}
          tabIndex={0}
          id="todoCheckbox"
          onChange={() => dispatch(toggle_todo({ id: todo.id }))}
        />
        <span tabIndex={0} aria-label={todo.title}>
          {todo.title}
        </span>
      </div>
      <button
        className="btn delete-btn"
        onClick={() => dispatch(delete_todo({ id: todo.id }))}
      >
        Delete
      </button>
    </section>
  );
};

export default ToDoItem;
