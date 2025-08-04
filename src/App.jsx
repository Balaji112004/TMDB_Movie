import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav"
import Movies from "./Movies";
import Watchlist from "./Watchlist";

function App() {
  return (
    <>
      {/* <h1 className='text-3xl font-bold underline'>Hello</h1> */}
      <BrowserRouter>
         <Routes>
              <Route path="/" element={<Nav />}>
                  <Route index="movies" element={<Movies/>}></Route>
                  <Route path="movies" element={<Movies/>}></Route>
                  <Route path="watchlist" element={<Watchlist/>}></Route>
              </Route>
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
