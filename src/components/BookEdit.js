import { useState } from "react";


function BookEdit({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id, title);
    };

    return (
    <form onSubmit={handleSubmit} className="book-edit">
        <input className="input" value={title} onChange={handleChange} ></input>
        <button className="button"> 
            Save
        </button>
    </form>
)};

export default BookEdit;