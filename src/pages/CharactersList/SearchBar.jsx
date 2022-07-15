import "./CharactersList.css";

function SearchBar({ setQuery }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBar;
