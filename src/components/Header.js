import React, { useContext } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { contexto } from './context/cartContext';

const Header = () => {

  const {cantidad} = useContext(contexto)

  //variable categories
  const [categories, setCategories] = useState([])

  return (
    <>
      <nav className='navbar bg-dark'>
        <div className='container container-top'>
          <Link to="/" className='navbar-brand'>
              <span className='brand-text'>monkee games</span>
          </Link>
          <div className='nav-container'>
            <div className='me-auto'></div>
            <div className='nav-upperline'>
              <input placeholder='Search your product...' autoComplete='off' />
              <div className='nav-item'>
                <span>Welcome!</span>
                <span>Daniel</span>
              </div>
              <Link to="login">
                <span>Log in</span>
              </Link>
              <div className='nav-item'>
                <Link to="/">
                  <CartWidget/>
                </Link>
                {cantidad}
              </div>
            </div>
          </div>
        </div>
        <div className='nav-scroller bg-dark'>
        <nav className='container nav nav-underline'>
          <NavBar />
        </nav>
        </div>
      </nav>
    </>
  )
}

export default Header