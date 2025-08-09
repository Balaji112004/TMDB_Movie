import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Movies from "./Movies";
import Watchlist from "./Watchlist";

function App() {
  const [watch, setwatch] = useState(() => {
    const saved = localStorage.getItem("watchlist");
    return saved ? JSON.parse(saved) : [];
  });


  // Save to localStorage ONLY when watch changes
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watch));
  }, [watch]);

  

  function toggleWatch(movie) {
    const exists = watch.find((m) => m.id === movie.id);
    if (exists) {
      // remove from watchlist
      setwatch(watch.filter((m) => m.id !== movie.id));
    } else {
      // add to watchlist
      setwatch([...watch, movie]);
    }
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route
              index="movies"
              element={<Movies watch={watch} toggleWatch={toggleWatch} />}
            />
            <Route
              path="movies"
              element={<Movies watch={watch} toggleWatch={toggleWatch} />}
            />
            <Route
              path="watchlist"
              element={
                <Watchlist
                  watch={watch}
                  toggleWatch={toggleWatch}
                  setwatch={setwatch}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
