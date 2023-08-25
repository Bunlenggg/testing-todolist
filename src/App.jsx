import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";
import { useState } from "react";
import FormEdit from "./components/FormEdit";

const App = () => {
  const [isOpen, setOpen] = useState(false);
  const [editId, setEditId] = useState(0);
  const [oldname, setOldName] = useState("");
  const [todos, setTodos] = useState([{ id: 1, name: "John", isCheck: false }]);
  const handleSubmit = (name) => {
    setTodos([...todos, { id: Math.random(), name, isCheck: false }]);
  };

  const onClick = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, isCheck: !t.isCheck } : t))
    );
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleEdit = (newName, id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, name: newName } : t)));
    setOpen(!isOpen);
  };

  const edit = (id) => {
    setEditId(id);
    console.log(id);
  };

  const oldName = (name) => {
    setOldName(name);
  };

  return (
    <>
      <div className="task-div">
        <h1>Don't Do It</h1>
        <TaskForm handleSubmit={handleSubmit} />
        <TaskList
          id={editId}
          setOpen={() => setOpen(!isOpen)}
          isOpen={isOpen}
          todo={todos}
          onClick={onClick}
          handleDelete={handleDelete}
          setEditId={edit}
          setOldName={oldName}
          handleEdit={handleEdit}
          oldName={oldname}
        />
      </div>
    </>
  );
};

export default App;
