function SearchBar(props) {
  return (
    <input
      type="text"
      placeholder="Search Products..."
      value={props.search}
      onChange={(e) => props.setSearch(e.target.value)}
      className="search-bar"
    />
  );
}

export default SearchBar;