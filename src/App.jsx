import "./App.css";
import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Search from "./components/Search";

const App = () => {
  const [isOpen, setOpen] = useState(false);
  const [editId, setEditId] = useState(0);
  const [oldname, setOldName] = useState("");
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const filtered = search
    ? todos.filter((t) => t.name.toLowerCase().includes(search.toLowerCase()))
    : todos;
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

  const handleSearch = (value) => {
    console.log(value);
    setSearch(value);
  };

  return (
    <>
      <div className="task-div">
        <h1>Don't Do It</h1>

        <TaskForm handleSubmit={handleSubmit} />
        <Search setSearch={handleSearch} />
        <TaskList
          id={editId}
          setOpen={() => setOpen(!isOpen)}
          isOpen={isOpen}
          todo={filtered}
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
