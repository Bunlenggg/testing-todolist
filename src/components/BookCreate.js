import { useState } from "react";

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');
    const handleChange = (event) => {
        setTitle(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title)
        setTitle('');
    };

    return (
        <div className="book-create"> 
        <form onSubmit={handleSubmit}>
            {/* <label className="title"> Title</label> */}
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button" >Add</button>
        </form>
        {/* <h3>Add a Book</h3> */}
        
    </div>
    )
};

export default BookCreate;