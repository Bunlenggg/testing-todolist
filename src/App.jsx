import Input from "./components/Input/Input";
import { useRef, useState } from "react";
const App = () => {
  const handleSubmit = (name) => {
    if (name.trim() === "") return;
    console.log(name);
    setUser([...user, { id: user.length + 1, name: name, isDone: false }]);
    console.log(user);
  };

  const handleMark = (id) => {
    setUser(
      user.map((person) =>
        person.id === id ? { ...person, isDone: !person.isDone } : person
      )
    );
    console.log("Update");
  };

  // handle Delete
  const handleDelete = (id) => {
    setUser(user.filter((person) => person.id !== id));
  };

  const [user, setUser] = useState([
    { id: 1, name: "Kboy", isDone: false },
    { id: 2, name: "lol", isDone: false },
    { id: 3, name: "korowow", isDone: false },
  ]);
  const newPerson = user.filter((person) => person.isDone === false);
  const filterPerson = user.filter((person) => person.isDone === true);

  // state handle edit

  // for form open
  const [isOpen, setOpen] = useState(false);
  // store old title
  const [oldTitle, setoldTitle] = useState("");
  // store old id
  const [id, setId] = useState(null);
  // new edit input value
  const editRef = useRef(null);

  const handleEdit = (name, id) => {
    setOpen(!isOpen);
    setoldTitle(name);
    setId(id);
    console.log(oldTitle, id);
  };

  const onEdit = (e) => {
    e.preventDefault();
    console.log("id", id);
    if (editRef.current.value == "") {
      setOpen(!isOpen);
      return;
    }
    console.log(editRef.current.value);
    setUser(
      user.map((person) =>
        person.id === id ? { ...person, name: editRef.current.value } : person
      )
    );
  };

  // ------------------
  return (
    <>
      <Input fnGetName={handleSubmit} />
      <p>List all Person {user.length}</p>
      <ul>
        {user.map((person) => (
          <div className="li" key={person.id}>
            <li
              className={person.isDone ? "line" : ""}
              onClick={() => handleMark(person.id)}
              key={person.id}
            >
              {person.name}
            </li>{" "}
            <button onClick={() => handleEdit(person.name, person.id)}>
              Edit
            </button>
            <button onClick={() => handleDelete(person.id)}>Delete</button>
          </div>
        ))}
      </ul>
      {newPerson.length !== 0 && (
        <>
          <p>List not done {newPerson.length}</p>
          <ul>
            {newPerson.map((person) => (
              <li onClick={() => handleMark(person.id)} key={person.id}>
                {person.name}
                <button>Edit</button>
                <button onClick={() => handleDelete(person.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </>
      )}

      {filterPerson.length !== 0 && (
        <>
          <p>List Done {filterPerson.length}</p>
          <ul>
            {filterPerson.map((person) => (
              <li
                onClick={() => handleMark(person.id)}
                className={person.isDone ? "line" : "not-line"}
                key={person.id}
              >
                {person.name}
                <button onClick={() => handleDelete(person.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </>
      )}

      {isOpen && (
        <form className="edit" onSubmit={onEdit}>
          <hr />
          <p>
            Old Name : <span>{oldTitle}</span> Old ID : <span>{id}</span>
          </p>
          <input ref={editRef} type="text" />
          <div>
            <button type="submit">Edit</button>
            <button onClick={() => setOpen(!isOpen)}>Cancel</button>
          </div>
        </form>
      )}
    </>
  );
};

export default App;
