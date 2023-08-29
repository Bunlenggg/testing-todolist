import CheckBox from "./CheckBox";
import FormEdit from "./FormEdit";

const TaskList = ({
  todo,
  done,
  onClick,
  handleDelete,
  isOpen,
  setOpen,
  id,
  handleEdit,
  setEditId,
  setOldName,
  oldName
}) => {
  return (
    <>
      <div className="check-list">
        <ul className="list-items">
          {todo.map((t) => (
            <li key={t.id} className={t.isCheck ? "grid line p" : "grid"}>
              {!t.isCheck && (
                <CheckBox
                  id={t.id}
                  checked={done}
                  onClick={() => onClick(t.id)}
                />
              )}
              {t.isCheck && (
                <CheckBox id={t.id} checked={true} onClick={onClick} />
              )}
              <p>{t.name}</p>
              <i
                onClick={() => {
                  setOpen(!isOpen);
                  setEditId(t.id);
                  setOldName(t.name)
                }}
                className="fa-solid fa-pen-to-square"
              ></i>
              <i
                onClick={() => handleDelete(t.id)}
                className="fa-solid fa-trash"
              ></i>
            </li>
          ))}
        </ul>
      </div>
      {isOpen && (
        <FormEdit
          isOpen={isOpen}
          setOpen={setOpen}
          handleEdit={handleEdit}
          id={id}
          oldName={oldName}
        />
      )}
    </>
  );
};

export default TaskList;
