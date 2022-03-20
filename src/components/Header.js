import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Header = ({ categories }) => {
  return (
    <>
      <nav className='navbar bg-dark'>
        <div className='container'>
          <Link to="/" className='navbar-brand'>
              <span className='brand-text'>brand name</span>
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
      </nav>
      <div className='nav-scroller bg-dark'>
        <nav className='container nav nav-underline'>
          {categories.map((category) => {
            return <NavBar key={category.value} category={category}/>
          })}
        </nav>
      </div>

    </>
  )
}

export default Header