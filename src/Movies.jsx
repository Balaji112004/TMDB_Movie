import React from "react";
import "./App.css";
import Moviecard from "./Moviecard";
function Movies() {
  return <div>
        <div className='h-[70vh] bg-cover bg-center flex items-end justify-center' style={{backgroundImage:`url(https://th.bing.com/th/id/R.41ba126807dba9973353212491177410?rik=Qt0kaievKJKnRg&riu=http%3a%2f%2fmanapop.com%2fwp-content%2fuploads%2f2018%2f04%2favengers-infinity-war-et00073462-02-04-2018-09-21-43.jpg&ehk=1OgP0hdHclvWvUOrxpdINoofP5nN96uWArdddoFsoFA%3d&risl=&pid=ImgRaw&r=0)`}}>
      <div className='text-white text-2xl p-2.5 bg-gray-700 w-full flex justify-center'>Avengers-Infinity War</div>
    </div>
            <div className='font-bold text-xl text-center pt-2 m-3'>
            Trending Movies
        </div>
    <div className="flex flex-wrap justify-around ">
        <Moviecard/>
        <Moviecard/>
        <Moviecard/>
        <Moviecard/>
        <Moviecard/>
        <Moviecard/>
        <Moviecard/>
        <Moviecard/>
    </div>
    
  </div>;
}

export default Movies;
