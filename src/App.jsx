import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [person, setPerson] = useState([]);
  const [editId, setEditId] = useState(null);
  const editRef = useRef();

  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    if (inputRef.current.value.trim() === "") return;
    setPerson([
      ...person,
      { id: person.length + 1, name: inputRef.current.value },
    ]);
    inputRef.current.value = "";
  };

  const handleEdit = (id) => {
    console.log(id);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setPerson(
      person.map((each) =>
        each.id === editId ? { ...each, name: editRef.current.value } : each
      )
    );

    editRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
        <button>Submit</button>
        <ul>
          {person.map((e) => {
            return (
              <li key={e.id}>
                {e.name}
                <button
                  onClick={() => {
                    handleEdit(e.id);
                    setEditId(e.id);
                    editRef.current.value = e.name;
                  }}
                >
                  Edit
                </button>
              </li>
            );
          })}
        </ul>
      </form>
      <hr />
      <form onSubmit={handleEditSubmit}>
        <input ref={editRef} type="text" />
        <button type="submit">Edit Now</button>
      </form>
    </>
  );
}

export default App;
