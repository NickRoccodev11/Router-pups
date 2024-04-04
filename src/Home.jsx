import utils from './utils/utils.js'
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar.jsx";
import PupList from "./PupList.jsx";

const Home = ({BASE_URL}) => {
  const [puppyList, setPuppyList] = useState([]);
  const [filterText, setFilterText] = useState("")
  
  useEffect(() => {
    utils.fetchPuppies(BASE_URL, setPuppyList );
  }, []);

  return (
    <div className="home-div">
      <SearchBar
      filterText={filterText}
      setFilterText={setFilterText}
      />
      <PupList
      puppyList={puppyList}
      filterText={filterText}
      />
    </div>
  )
}

export default Home
