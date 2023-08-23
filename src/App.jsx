import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [person, setPerson] = useState([]);
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

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" />
      <button>Submit</button>
      <ul style={{ color: "red", listStyle: "none", textAlign: "ronaldo" }}>
        {person.map((e) => {
          return <li>{e.name}</li>;
        })}
      </ul>
    </form>
  );
}

export default App;
