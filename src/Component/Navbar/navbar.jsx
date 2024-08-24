import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function navbar() {






    
  return<>
<nav className='navbar'>
<div className='container flex justify-between py-7 '>

  <div className='contant text-2xl font-bold py-3 ps-8 text-white'>
    <h2 className='ps-8 '>START FRAMWORLOK</h2>
  </div>

  <div className='links'>
    <ul className='flex py-4 text-white'>
      <li className='ps-2'><NavLink to="About">ABOUT</NavLink></li>
      <li className='ps-6'><NavLink to="protfolio">PROTFOLIO</NavLink></li>
      <li className='ps-6'><NavLink to="contact">CONTACT</NavLink></li>
    </ul>
  </div>

</div>

</nav>
  
  
  
  
  </>
}
