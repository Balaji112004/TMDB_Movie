import React from 'react'
import "./App.css";
import { Link, Outlet } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <div className='h-15 flex  border items-center'>
            <i class='bx bx-camera-movie text-4xl p-3 mr-1'></i>
            <Link to="/movies" className='p-3 text-xl font-semibold text-purple-500 hover:font-bold hover:text-purple-600 '>Movies</Link>
            <Link to="/watchlist" className='p-3  text-xl text-bold-700 font-semibold text-purple-500 hover:font-bold hover:text-purple-600'>Watchlist</Link>
        </div>
        <div>
            <Outlet/>
        </div>
    </div>

  )
}

export default Nav