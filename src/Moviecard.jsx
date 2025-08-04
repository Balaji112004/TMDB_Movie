import React from 'react'
import './App.css'

function Moviecard({url}) {
  return (
    <div>

        <div className='h-[40vh] w-[150px] rounded-xl bg-cover bg-center hover:scale-110 duration-300 hover:cursor-pointer' style={{backgroundImage:`url(https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/215788/AQAMN_VERT_TSR_DOM_2764x4096-R01_master.jpg)`}}>

        </div>
    </div>
  )
}

export default Moviecard