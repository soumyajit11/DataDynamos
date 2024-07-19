import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='bg-blue-500 flex justify-around h-10'>
      <ul className='flex gap-3'>
      <NavLink className={(e)=>{e.isActive?"red":""}} to="/home"><li>home</li></NavLink> 
      <NavLink className={(e)=>{e.isActive?"red":""}} to="/appointment"><li>contact us</li></NavLink> 
      </ul>
      <div className='button'>
        <NavLink className={(e)=>{e.isActive?"red":""}} to="/login"><li>Log In</li></NavLink> 
      </div>
    </nav>


  )
}

export default Navbar
