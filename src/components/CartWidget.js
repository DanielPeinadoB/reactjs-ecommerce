import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from './context/cartContext';

const CartWidget = () => {
  
  const {cantidad, unidades} = useContext(contexto)

  return (
    <Link to="/cart">
      <span className="material-icons">
          shopping_cart
      </span>
      {unidades() === 0 ? (
        <span>0</span>
      ) : ( 
        <span>{cantidad}</span>
      )}
    </Link>
  )
}

export default CartWidget