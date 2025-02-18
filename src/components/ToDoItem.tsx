import { useDispatch } from "react-redux";
import { deleteTodoAsync, toggleTodoAsync } from "../redux/feature/toDoSlice";

const ToDoItem = ({ todo }: any) => {
  const dispatch: any = useDispatch();

  const handleToggleClick = () => {
    dispatch(toggleTodoAsync({ id: todo.id, completed: !todo.completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodoAsync({ id: todo.id }));
  };

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
          onChange={() => handleToggleClick()}
        />
        <span tabIndex={0} aria-label={todo.title}>
          {todo.title}
        </span>
      </div>
      <button className="btn delete-btn" onClick={() => handleDeleteClick()}>
        Delete
      </button>
    </section>
  );
};

export default ToDoItem;
