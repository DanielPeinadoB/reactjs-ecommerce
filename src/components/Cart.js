import React, { useContext } from 'react'
import { contexto } from './cartContext'

const Cart = () => {

  const {carrito, total} = useContext(contexto)

  return (
    <div>Cart</div>
  )
}

export default Cart