import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'

/*const NavBar = () => {

  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <>
        <li className='nav-item'>
            <NavLink to="category/keyboards" className='nav-link' onClick={handleClick}>keyboards</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to="category/monitor" className='nav-link' onClick={handleClick}>monitor</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to="category/mouse" className='nav-link' onClick={handleClick}>mouse</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to="category/cases" className='nav-link' onClick={handleClick}>cases</NavLink>
        </li>
    </>
  )
}*/

const NavBar = ({ category }) => {

  return (
    <>
        <li className='nav-item'>
            <NavLink to={`/category/${category}`} className='nav-link'>{category}</NavLink>
        </li>
    </>
  )
}

export default NavBar