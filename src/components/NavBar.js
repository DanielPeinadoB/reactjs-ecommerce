import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = ({ category }) => {

  return (
    <>
        <li className='nav-item'>
            <Link to={`/category/${category}`} className='nav-link'>{category}</Link>
        </li>
    </>
  )
}

export default NavBar