const Search = ({setSearch}) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <form className="search">
        <input
          onChange={handleChange}
          className="input"
          type="text"
          placeholder="Search todo"
        ></input>
      </form>
    </>
  );
};

export default Search;
