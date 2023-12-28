import React, { useState } from 'react';
import Home from "./components/Home";
import Create from './components/Create'
import Show from './components/Show'
import { Route } from 'react-router-dom';
import { Link, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Details from './components/Details.jsx'
import Products from './components/Products';


const App = () => {
  const [users, setusers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  )

  return (
    <>

      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/create" element={
          <Create />} />

        <Route
          path="/show"
          element={<Show />}>

          <Route path='Show/Details/:title' element={<Details />} />        </Route>

        <Route path="/products" element={<Products />} />



      </Routes>

    </>
  )
}

export default App