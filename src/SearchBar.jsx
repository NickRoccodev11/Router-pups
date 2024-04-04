const SearchBar = ({ puppyList, setSorted, setSortedList, setFilterText, filterText }) => {

  const sortList = (puppyList) => {
   const pupCopy = structuredClone(puppyList)
    const OrderedPupList = pupCopy.sort((puppy, nextPuppy) => {
      if (puppy.name.toLowerCase() < nextPuppy.name.toLowerCase()) {
        return -1
      } else if (puppy.name.toLowerCase() > nextPuppy.name.toLowerCase()) {
        return 1
      } else {
        return 0
      }
    })
    setSorted(true)
    setSortedList(OrderedPupList)
  }

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
      <div className="sort-section">
      <button
        onClick={() => { sortList(puppyList) }}
      >
        Sort By Name</button>
        <button
        onClick={()=>setSorted(false)}
        > Undo Sort </button>
      </div>
      
    </div>
  )
}

export default SearchBar