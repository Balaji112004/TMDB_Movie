import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Moviecard from "./Moviecard";
import Pagination from "./Pagination";
function Movies() {
  const [count, setcount] = useState(1);
  const [movies, setmovies] = useState([]);
  function Reduce() {
    if (count > 1) {
      setcount(count - 1);
    }
  }
  function Incre() {
    setcount(count + 1);
  }
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=7ef55c786669cab2ab2072cd9cbb9313&language=en-US&page=${count}`
      )
      .then(function (res) {
        console.log(res.data.results);
        setmovies(res.data.results);
      });
  }, [count]);
  return (
    <div>
      <div
        className="h-[30vh] lg:w-full lg:h-[70vh]  bg-cover bg-center flex items-end justify-center"
        style={{
          backgroundImage: `url(https://th.bing.com/th/id/R.41ba126807dba9973353212491177410?rik=Qt0kaievKJKnRg&riu=http%3a%2f%2fmanapop.com%2fwp-content%2fuploads%2f2018%2f04%2favengers-infinity-war-et00073462-02-04-2018-09-21-43.jpg&ehk=1OgP0hdHclvWvUOrxpdINoofP5nN96uWArdddoFsoFA%3d&risl=&pid=ImgRaw&r=0)`,
        }}
      >
        <div className="text-sm p-1 text-white lg:text-xl lg:p-2.5 bg-gray-900/60 w-full flex justify-center">
          Avengers-Infinity War
        </div>
      </div>
      <div className="font-bold text-3xl text-center pt-2 m-4 mb-10">
        Trending Movies
      </div>

      <div className="flex flex-wrap justify-around mx-10">
        {movies.map((movie) => (
          <Moviecard key={movie.id} movie={movie} title={movie.title} />
        ))}
      </div>

      <Pagination Incre={Incre} Reduce={Reduce} count={count}/>
    </div>
  );
}

export default Movies;

// https://api.themoviedb.org/3/movie/popular?api_key=7ef55c786669cab2ab2072cd9cbb9313&language=en-US&page=1
