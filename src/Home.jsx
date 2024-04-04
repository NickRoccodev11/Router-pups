import utils from './utils/utils.js'
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar.jsx";
import PupList from "./PupList.jsx";

const Home = ({BASE_URL}) => {
  const [puppyList, setPuppyList] = useState([]);
  const [filterText, setFilterText] = useState("")
  const [sorted, setSorted] = useState(false)
  const [sortedList, setSortedList] = useState([])
  
  useEffect(() => {
    utils.fetchPuppies(BASE_URL, setPuppyList );
  }, []);

  return (
    <div className="home-div">
      <SearchBar
      puppyList={puppyList}
      filterText={filterText}
      setFilterText={setFilterText}
      setSorted={setSorted}
      setSortedList={setSortedList}
      />
      <PupList
      sorted={sorted}
      sortedList={sortedList}
      puppyList={puppyList}
      filterText={filterText}
      />
    </div>
  )
}

export default Home
