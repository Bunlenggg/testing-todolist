import Input from "./components/Input/Input";
import { useState } from "react";
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
  return (
    <>
      <Input fnGetName={handleSubmit} />
      <p>List all Person {user.length}</p>
      <ul>
        {user.map((person) => (
          <div className="li">
            <li
              className={person.isDone ? "line" : ""}
              onClick={() => handleMark(person.id)}
              key={person.id}
            >
              {person.name}
            </li>{" "}
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
    </>
  );
};

export default App;
