import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos }: any) => {
  return (
    <div className="list-container">
      {todos.map((todo: { id: number; title: string; completed: boolean }) => {
        return <ToDoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default ToDoList;
