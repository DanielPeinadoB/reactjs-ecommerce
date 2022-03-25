import React, { useContext } from 'react'
import { contexto } from './cartContext'

const Cart = () => {

  const {carrito, total, setCarrito} = useContext(contexto)

  const handleClick = () => {
    
  }

  console.log(carrito)

  return (
    <div className='cart'>
      <h2>Cart</h2>
      {carrito.map(producto => (
        <div className='cart-detail' key={producto.id}>
          <div className='cart-img'>
            <img src="/" alt="" />
          </div>
          <div className='cart-product'>
            <div className='cart-product-details'>
              <span>{producto.nombre}</span>
              <span>Stock remaining</span>
              <button onClick={handleClick}>borrar</button>
            </div>
            <div className='cart-product-details'>
              <span>{producto.precio * producto.cantidad}</span>
            </div>
          </div>
        </div>
      ))}
      
    </div>
  )
}

export default Cart