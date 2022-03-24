import React, { useContext } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify'
import { contexto } from './cartContext';

const Header = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
    .then((response) => {
      return response.json()
    })
    .then((resultado) => {
      setCategories(resultado)
      console.table(resultado)
    })
    .catch(() => {
      toast.error("Error al cargar los productos")
    })
    .finally(() => {
      
    })
  },[])

  const {cantidad} = useContext(contexto)

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
              </div>
            </div>
          </div>
        </div>
        <div className='nav-scroller bg-dark'>
          <nav className='container nav nav-underline'>
            {categories.map((category) => {
              return <NavBar key={category} category={category}/>
            })}
          </nav>
        </div>
      </nav>
    </>
  )
}

export default Header