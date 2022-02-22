import React from 'react'

const NavBar = () => {
  return (
    <>
        <nav className='navbar'>
            <div className='container'>
                <a href="/" className='navbar-brand'>
                    <span className='brand-text'>nombre</span>
                </a>
                <div className='nav-container'>
                    <div className='nav-item'>login</div>
                    <div className='nav-item'>cart</div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar