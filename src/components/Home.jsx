import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="first bg-slate-300 h-screen flex justify-between">
        <div className="left w-1/2 flex flex-wrap justify-center content-center items-center"><div className='text-7xl text-left text-white'>Ultra Care Hospital</div>
          <div className='text-4xl text-left text-black'>where your health comes first
            <div className="button text-white bg-slate-600 rounded-lg w-3/4 px-5 py-2 h-14">
            
            <NavLink to="/appointment"><button>Book a conultation</button></NavLink>
              
            </div>
          </div>
        </div>
        <div className="right w-1/2"><img srcSet="https://img.freepik.com/free-photo/medium-shot-smiley-doctor-with-coat_23-2148814212.jpg?w=360&t=st=1720293931~exp=1720294531~hmac=35b16006c1ce28fcd2d4062973df802db85b2a18864aed3af776954e671d2923" className='w-screen h-screen' alt=""  /></div>
      </div>
      <div className="second bg-image ">
        <div className="h-screen flex flex-col justify-center content-center items-center">
        <span className="material-symbols-outlined">
          heart_plus
        </span>
        <div className='text-7xl text-white'>
          Ultra Care Hospital
        </div>
        <div className='text-4xl flex flex-wrap text-black'>
          where your health comes first
          <div className="button text-white bg-slate-600 rounded-lg w-3/4 px-5 py-2 h-14 mt-4">
            <NavLink to="/appointment"><button>Book a consultation</button></NavLink>
          </div>
        </div>
      </div>
    </div >
    </div>
  )
}

export default Home
