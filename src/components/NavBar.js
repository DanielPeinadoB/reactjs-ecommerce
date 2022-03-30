import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <>
        <li className='nav-item'>
            <NavLink to="/category/teclados" className='nav-link'>teclados</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to="/category/ratones" className='nav-link'>ratones</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to="/category/monitores" className='nav-link'>monitores</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to="/category/gabinetes" className='nav-link'>gabinetes</NavLink>
        </li>
    </>
  )
}

export default NavBar