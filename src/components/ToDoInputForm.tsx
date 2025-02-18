import { FormEvent, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addToDoAsync } from "../redux/feature/toDoSlice";

const ToDoInputForm = () => {
  const [val, setVal] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch: any = useDispatch();
  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (val) {
      dispatch(addToDoAsync({ title: val }));
      setVal("");
    } else {
    }
  }

  return (
    <form className="form-section" onSubmit={(e) => handleSubmit(e)}>
      <input
        ref={inputRef}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        className="input"
        type="text"
        name="todo_input"
        id="todo_input"
        autoComplete="off"
        aria-label="Please enter todo"
      />
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default ToDoInputForm;
