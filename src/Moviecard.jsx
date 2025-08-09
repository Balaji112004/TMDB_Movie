import React, { useState } from "react";
import "./App.css";

function Moviecard({ movie, title, watch,toggleWatch }) {

  const [hovered, setHovered] = useState(false);
  // console.log(movie);
  


  return (
    // <div className="p-4" >
    //   <div
    //     className="group h-[50vh] w-[250px] flex flex-col justify-between rounded-xl bg-cover bg-center hover:scale-110 duration-300 cursor-pointer "
    //     style={{
    //       backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
    //     }}
    //   >
    //     {/* <img src={"https://image.tmdb.org/t/p/original/"+movie.poster_path} alt="" /> */}
        // <div className="w-full p-2 flex justify-end">
        //   {heart ? (
        //     <i
        //       class="bx bx-heart bg-black text-xl text-red-500 p-2 rounded-2xl"
        //       onClick={tog}
        //     ></i>
        //   ) : (
        //     <i
        //       class="bx bxs-heart bg-black text-xl text-red-500 p-2 rounded-2xl"
        //       onClick={tog}
        //     ></i>
        //   )}
        // </div>
    //     <div className="text-white text-md opacity-0 group-hover:opacity-100 p-2.5 bg-gray-900/60 w-full flex justify-center rounded-b-xl transition-opacity duration-300">
    //       {movie.title}
    //     </div>
    //   </div>
    // </div>

    <div className="p-4 "  onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
      {hovered?
          <div className="group h-[20vh] w-[250px] rounded-xl hover:scale-160 z-20 duration-300 cursor-pointer relative">
          <img className="h-[20vh] w-[250px] rounded-t-xl" src={"https://image.tmdb.org/t/p/original/"+movie.backdrop_path} alt="" />
          <div className="text-white w-full  text-md opacity-0 group-hover:opacity-100 p-2.5 bg-gray-900/60 rounded-b-xl transition-opacity duration-300">
              
              <h1 className="font-semibold pb-1">  {movie.title}</h1>
              <div className="text-xs font-semibold pb-1">Year : {movie.release_date.slice(0,4)}</div>
              <div className="text-xs font-light">{movie.overview.slice(0,170)}</div>
          </div>
          <div>
            
          </div>
          <div className="absolute top-2 right-2">
              {watch.some((m) => m.id === movie.id) ? (
                <i
                  className="bx bxs-heart bg-black text-xl text-red-500 p-2 rounded-2xl"
                  onClick={() => toggleWatch(movie)}
                ></i>
              ) : (
                <i
                  className="bx bx-heart bg-black text-xl text-red-500 p-2 rounded-2xl"
                  onClick={() => toggleWatch(movie)}
                ></i>
              )}
        </div>
      </div>
      :
          <div className="group h-[50vh] w-[250px] rounded-xl hover:scale-110  duration-300 cursor-pointer relative">
          <img className="h-[50vh] w-[250px] rounded-xl" src={"https://image.tmdb.org/t/p/original/"+movie.poster_path} alt="" />
          <div className="text-white absolute bottom-0 w-full text-center text-md opacity-0 group-hover:opacity-100 p-2.5 bg-gray-900/60 rounded-b-xl transition-opacity duration-300">
              {movie.title}
          </div>
          <div className="absolute top-2 right-2">
              {watch.some((m) => m.id === movie.id) ? (
                <i
                  className="bx bxs-heart bg-black text-xl text-red-500 p-2 rounded-2xl"
                  onClick={() => toggleWatch(movie)}
                ></i>
              ) : (
                <i
                  className="bx bx-heart bg-black text-xl text-red-500 p-2 rounded-2xl"
                  onClick={() => toggleWatch(movie)}
                ></i>
              )}
        </div>
      </div>
    }
    </div>

  );
}

export default Moviecard;
