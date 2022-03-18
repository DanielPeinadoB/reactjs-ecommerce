import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
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
                <li className='nav-item'>
                    <Link to="/category/products" className='nav-link'>products</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/category/dishes" className='nav-link'>dishes</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/category/cookingsets" className='nav-link'>cooking sets</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/category/kitchen" className='nav-link'>kitchen</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/category/customdesigns" className='nav-link'>custom designs</Link>
                </li>
            </nav>
        </div>
    </>
  )
}

export default NavBar