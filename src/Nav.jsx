import React from 'react'
import "./App.css";
import { Link, Outlet } from 'react-router-dom'
import logo from '../src/assets/logo.PNG';

function Nav() {
  return (
    <div>
        <div className='h-15 flex justify-between border items-center'>
            {/* <i className='bx bx-camera-movie text-4xl p-3 mr-1'></i> */}
            
            <div className='m-2 '>
              <img className='h-[45px] w-[150px]' src={logo} alt="" />
            </div>
            <div className='mr-8'>
            <Link to="/movies" className='p-3 text-xl font-semibold text-purple-500 hover:font-bold hover:text-purple-600 hover:cursor-pointer'>Movies</Link>
            <Link to="/watchlist" className='p-3  text-xl text-bold-700 font-semibold text-purple-500 hover:font-bold hover:text-purple-600 hover:cursor-pointer'>Watchlist</Link>
            </div>
        </div>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Nav
