import { useRef, useState } from "react";

const TaskForm = ({ handleSubmit }) => {
  const inputRef = useRef(null);
  const handleSub = (e) => {
    e.preventDefault();
    if (!inputRef.current.value.trim()) return;

    handleSubmit(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <>
      <div>
        <form className="task-form" onSubmit={handleSub}>
          <button className="btn" type="submit">
            +
          </button>
          <input
            ref={inputRef}
            className="input"
            type="text"
            placeholder="Add new Todo"
          ></input>
        </form>
      </div>
    </>
  );
};

export default TaskForm;
