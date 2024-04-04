const SearchBar = ({ setFilterText, filterText }) => {
  return (
    <div id="search-div">
      <h3 >Search by Name:</h3>
      <input
        value={filterText}
        onChange={(e) => {
          setFilterText(e.target.value.toLowerCase())
        }}
        type="text"
      />
    </div>
  )
}

export default SearchBar