import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <>
        <nav className='navbar bg-dark'>
            <div className='container'>
                <a href="/" className='navbar-brand'>
                    <span className='brand-text'>nombre</span>
                </a>
                <div className='nav-container'>
                    <div className='me-auto'></div>
                    <div className='nav-upperline'>
                        <input placeholder='Search your product...' autoComplete='off' />
                        <div className='nav-item'>
                            <span>Welcome!</span>
                            <span>Daniel</span>
                        </div>
                        <div>
                            <span>Log in</span>
                        </div>
                        <div className='nav-item'>
                            <a href="/">
                                <CartWidget/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div className='nav-scroller bg-dark'>
            <nav className='container nav nav-underline'>
                <li className='nav-item'>
                    <a href="/" className='nav-link'>products</a>
                </li>
                <li className='nav-item'>
                    <a href="/" className='nav-link'>dishes</a>
                </li>
                <li className='nav-item'>
                    <a href="/" className='nav-link'>cooking sets</a>
                </li>
                <li className='nav-item'>
                    <a href="/" className='nav-link'>kitchen</a>
                </li>
                <li className='nav-item'>
                    <a href="/" className='nav-link'>custom designs</a>
                </li>
            </nav>
        </div>
    </>
  )
}

export default NavBar