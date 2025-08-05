import React, { useState,useEffect } from "react";
import "./App.css";
import axios from "axios";
import Moviecard from "./Moviecard";
function Movies() {
  const [count,setcount]=useState(1);
  const [movies,setmovies]=useState([]);
  function click(){
    if(count>1){
       setcount(count-1);
    }

  }
  useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=7ef55c786669cab2ab2072cd9cbb9313&language=en-US&page=`+count)
        .then(function(res){
          console.log(res.data.results);
          setmovies(res.data.results);
        })
  },[count])
  return <div>
        <div className='h-[70vh] bg-cover bg-center flex items-end justify-center' style={{backgroundImage:`url(https://th.bing.com/th/id/R.41ba126807dba9973353212491177410?rik=Qt0kaievKJKnRg&riu=http%3a%2f%2fmanapop.com%2fwp-content%2fuploads%2f2018%2f04%2favengers-infinity-war-et00073462-02-04-2018-09-21-43.jpg&ehk=1OgP0hdHclvWvUOrxpdINoofP5nN96uWArdddoFsoFA%3d&risl=&pid=ImgRaw&r=0)`}}>
      <div className='text-white text-2xl p-2.5 bg-gray-700 w-full flex justify-center'>Avengers-Infinity War</div>
    </div>
            <div className='font-bold text-xl text-center pt-2 m-3'>
            Trending Movies
        </div>
    <div className="flex flex-wrap justify-around ">
        
        {/* <Moviecard/>
        <Moviecard/>
        <Moviecard/>
        <Moviecard/>
        <Moviecard/>
        <Moviecard/>
        <Moviecard/> */}
        {/* {movies.map((index,val)=>{
            return <Moviecard index={index} val={val}/>
        })} */}
        {movies.map((movie) => (
  <Moviecard key={movie.id} movie={movie} title={movie.title} />
))}
    </div>
    <div className="w-full flex justify-center ">
      <button className="text-4xl pr-3"><i class='bx bx-chevron-left' onClick={click}></i></button>
      
      <p className="text-2xl mt-.8">{count} </p>
      <button className="text-4xl pl-3 hover:scale-110"><i class='bx bx-chevron-right' onClick={()=>setcount(count+1)} ></i></button>
    </div>
  </div>;
}

export default Movies;

// https://api.themoviedb.org/3/movie/popular?api_key=7ef55c786669cab2ab2072cd9cbb9313&language=en-US&page=1