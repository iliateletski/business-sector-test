import Header from "./components/TableHeader/TableHeader";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Table from "./components/Table/\Table";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search/>
        <Table/>
        <Pagination/>
      </div>
    </div>
  );
}

export default App;
