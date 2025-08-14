import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Moviecard from "./Moviecard";
import Pagination from "./Pagination";
import movieNight from './assets/Mov_pos.png';

function Movies({watch,toggleWatch,heart}) {
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
    .get(`/api/movies?page=${count}`)
    .then((res) => {
      console.log("Page:", count, res.data.results);
      setmovies(res.data.results);
    })
    .catch((err) => {
      console.error("Error fetching movies:", err);
    });
}, [count]); // count must be in dependency array


  return (
    <div>
      <div
        className="h-[30vh] lg:w-full lg:h-[70vh]  bg-cover bg-center flex items-end justify-center"
        style={{
          backgroundImage: `url(${movieNight})`,
        }}
      >

{/*         <div className="text-sm p-1 text-white lg:text-xl lg:p-2.5 bg-gray-900/60 w-full flex justify-center">
          Avengers-Infinity War
        </div> */}
      </div>
      <div className="font-bold text-3xl text-center pt-2 m-4 mb-10">
        Trending Movies
      </div>

      <div className="flex flex-wrap justify-around mx-10">
        {movies.map((movie) => (
          <Moviecard key={movie.id} watch={watch}
          isLiked={watch.some((m) => m.id === movie.id)}
          toggleWatch={toggleWatch} movie={movie}
         title={movie.title} />
        ))}
      </div>

      <Pagination Incre={Incre} Reduce={Reduce} count={count}/>
    </div>
  );
}

export default Movies;

// https://api.themoviedb.org/3/movie/popular?api_key=7ef55c786669cab2ab2072cd9cbb9313&language=en-US&page=1
