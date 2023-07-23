import Table from "./components/Table/Table"
import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Container from "./components/Container/Container"

function App() {

  return (
    <BrowserRouter basename="/business-sector-test">
        <Routes>
          <Route path="/" element={<Container/>}>
            <Route index element={<Navigate to={`${1}`}/>}/>
            <Route 
              path="/:page"
              element={<Table/>}
              />
            </Route>
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
