import { useRef } from "react";

const FormEdit = ({ oldName, handleEdit, id, setOpen, isOpen }) => {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputRef.current.value.trim()) return;
    handleEdit(inputRef.current.value, id);
  };
  return (
    <>
      <div className="wrapper-form">
        <form className="task-form" onSubmit={handleSubmit}>
          <input
            className="input"
            defaultValue={oldName}
            ref={inputRef}
            type="text"
          />
          <button className="btn">Save</button>
          <button className="btn btn-cancel" onClick={() => setOpen(!isOpen)}>
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};

export default FormEdit;
