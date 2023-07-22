import Pagination from "./components/Pagination/Pagination"
import Search from "./components/Search/Search"
import Table from "./components/Table/Table"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"

function App() {

  const dispatch = useDispatch()
  const totalCount  = useSelector(state => state.totalCount )
  const[filter, setFilter] = useState({sortParam: '', query: ''})
  // console.log(filter.sortParam)

  return (
    <div className="App">
      <div className="container">
        <Search setFilter={setFilter}/>
        <Table
          filter={filter}
          setFilter={setFilter}
        />
        <Pagination/>
      </div>
    </div>
  );
}

export default App;
