import React from 'react'

const Cart = () => {

  return (
    <div className='cart'>
      <h2>Cart</h2>
        <div className='cart-detail' >
          <div className='cart-img'>
            <img src="/" alt="" />
          </div>
          <div className='cart-product'>
            <div className='cart-product-details'>
              <span>producto.nombre</span>
              <span>Stock remaining</span>
              <button>borrar</button>
            </div>
            <div className='cart-product-details'>
              <span>producto.precio * producto.cantidad</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cart