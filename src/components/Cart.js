import React, { useContext } from 'react'
import { contexto } from './context/cartContext'
//firebase
import { db } from './firebase'
import { addDoc, collection, getDocs, serverTimestamp, updateDoc } from "firebase/firestore"
import { toast } from 'react-toastify'

const Cart = () => {

  const {carrito,total} = useContext(contexto)
  const {removeItem} = useContext(contexto)

  const terminarCompra = () => {
    const orden = {
      buyer : {
        nombre : "Daniel Peinado",
        telefono : "987449998",
        email : "daniel.peinadob@gmail.com"
      },
      items : carrito,
      date : serverTimestamp(),
      total : total
    }

    const ordenesCollection = collection(db,"ordenes")
    const pedido = addDoc(ordenesCollection,orden)

    pedido
      .then(res => {
        console.log(res)
        toast.success("Finalizo la compra!" + "ID de compra :" + res.id)
        //updateDoc - Actualizar el stock restando la cantidad comprada
      })
      .catch(() => toast.error("Hubo un error con el proceso de tu compra"))
    
  }

  return (
    <div className='cart'>
      <h2>Cart</h2>
      {carrito.map(producto => (
        <div className='cart-detail' key={producto.id}>
          <div className='cart-img'>
            <img src={producto.prodimg} alt="" />
          </div>
          <div className='cart-product'>
            <div className='cart-product-details'>
              <span>{producto.title}</span>
              <span>Stock remaining</span>
              <button onClick={() => removeItem(producto.id)}>borrar</button>
            </div>
            <div className='cart-product-details'>
              <span>$ {producto.price * producto.nuevaCantidad}</span>
            </div>
          </div>
        </div>
      ))}
      <p>Total : $ {total}</p>
      <button onClick={terminarCompra} className='boton'>Terminar la compra</button>
      <span></span>
    </div>
  )
}

export default Cart