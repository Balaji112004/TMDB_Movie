import React from 'react'
import './App.css'

function Moviecard({movie,title}) {
  return (
    <div className='p-4'>

<div className='group h-[50vh] w-[250px] rounded-xl bg-cover bg-center hover:scale-110 duration-300 cursor-pointer flex items-end' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie.poster_path})`}}>
{/* <img src={"https://image.tmdb.org/t/p/original/"+movie.poster_path} alt="" /> */}
  <div className='text-white text-sm opacity-0 group-hover:opacity-100 p-2.5 bg-gray-700 w-full flex justify-center rounded-b-xl transition-opacity duration-300'>
    {movie.title}
    
  </div>
</div>

    </div>
  )
}

export default Moviecard