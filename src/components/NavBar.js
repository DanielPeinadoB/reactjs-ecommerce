import React from 'react';
import { NavLink } from 'react-router-dom'

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