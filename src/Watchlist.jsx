import React, { useEffect, useState } from "react";
import Genreids from "./utility/Genre";

function Watchlist({ watch, toggleWatch, setwatch }) {
  const [search, setsearch] = useState("");
  const [genrelist, setgenrelist] = useState(["All Genre"]);
  const [curgen, setcurgen] = useState("All Genre");

  function genrehandler(genre) {
    setcurgen(genre);
  }

  function sortIncreasing() {
    let inc = [...watch].sort((movieA, movieB) => movieA.vote_average - movieB.vote_average);
    setwatch(inc);
  }

  function sortDecreasing() {
    let dec = [...watch].sort((movieA, movieB) => movieB.vote_average - movieA.vote_average);
    setwatch(dec);
  }

  // Generate genre list when watchlist changes
  useEffect(() => {
    let temp = watch.map((lis) => Genreids[lis.genre_ids[0]]);
    temp = new Set(temp);
    setgenrelist(["All Genre", ...temp]);
  }, [watch]);

  return (
    <div>
      {/* Genre Buttons */}
      <div className="my-5 flex justify-center">
        {genrelist.map((genre, index) => (
          <div
            key={index}
            onClick={() => genrehandler(genre)}
            className={
              genre === curgen
                ? "font-bold text-white bg-blue-400 w-[140px] p-3 rounded-xl flex justify-center mx-3 hover:cursor-pointer"
                : "font-bold text-white bg-gray-400 w-[140px] p-3 rounded-xl flex justify-center mx-3 hover:cursor-pointer"
            }
          >
            {genre}
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="w-full flex justify-center mt-5">
        <input
          onChange={(e) => setsearch(e.target.value)}
          value={search}
          type="text"
          className="p-2 w-[300px] bg-gray-200 outline-none text-sm"
          placeholder="Search for a movie"
        />
      </div>

      {/* Table */}
      <div className="border border-gray-200/70 m-6">
        <table className="w-full text-center text-gray-500">
          <thead className="border-b-2">
            <tr>
              <th className="w-[50%] p-1">Name</th>
              <th>
                <div>
                  <button onClick={sortDecreasing}>
                    <i className="bx bx-up-arrow-alt pr-3"></i>
                  </button>
                  Ratings
                  <button onClick={sortIncreasing}>
                    <i className="bx bx-down-arrow-alt pl-3"></i>
                  </button>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {watch
              .filter((lis) =>
                curgen === "All Genre" ? true : Genreids[lis.genre_ids[0]] === curgen
              )
              .filter((lis) => lis.title.toLowerCase().includes(search.toLowerCase()))
              .map((lis, index) => (
                <tr key={index} className="border-b border-gray-500">
                  <td>
                    <div className="w-full m-1 relative">
                      <img
                        className="w-[100px]"
                        src={`https://image.tmdb.org/t/p/original/${lis.poster_path}`}
                        alt=""
                      />
                      <p className="absolute left-35 top-15">{lis.title}</p>
                    </div>
                  </td>
                  <td>{lis.vote_average}</td>
                  <td>{lis.popularity}</td>
                  <td>{Genreids[lis.genre_ids[0]]}</td>
                  <td>
                    <button
                      className="text-red-500 font-semibold"
                      onClick={() => toggleWatch(lis)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Watchlist;
