import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from './context/cartContext';

const CartWidget = () => {
  
  const {unidades} = useContext(contexto)

  return (
    <Link to="/cart">
      <span className="material-icons">
          shopping_cart
      </span>
      {unidades() === 0 ? (
        <span></span>
      ) : ( 
        <span>{unidades()}</span>
      )}
    </Link>
  )
}

export default CartWidget