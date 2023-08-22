import { useRef } from "react";

const Input = ({ fnGetName }) => {
  const inputRef = useRef(null);
  // fn submit
  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputRef.current.value);

    fnGetName(inputRef.current.value);

    inputRef.current.value = "";
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input ref={inputRef} />
          <button type="submit">Create</button>
        </div>
      </form>
    </>
  );
};

export default Input;
