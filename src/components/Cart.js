import React, { useContext } from 'react'
import { contexto } from './context/cartContext'
//firebase
import { db } from './firebase'
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { toast } from 'react-toastify'

const Cart = () => {

  const {carrito, total} = useContext(contexto)
  const {removeItem} = useContext(contexto)
  const {clearItems} = useContext(contexto)

  const terminarCompra = () => {
    const orden = {
      buyer : {
        nombre : "Daniel Peinado",
        telefono : "987449998",
        email : "daniel.peinadob@gmail.com"
      },
      items : carrito,
      date : serverTimestamp(),
    }

    const ordenesCollection = collection(db,"ordenes")
    const pedido = addDoc(ordenesCollection,orden)

    pedido
      .then(res => {
        console.log(res)
        toast.success("Finalizo la compra! ID de compra :" + res.id)
        //updateDoc - Actualizar el stock restando la cantidad comprada
        console.log(res.id)
        console.log(total())
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
              <div className='col small'>
                <div>
                  <span>Precio Unit.</span>
                  <span>{producto.price}</span>
                </div>
                <div>
                  <span>Cantidad</span>
                  <span>{producto.cantidad}</span>
                </div>
              </div>
              <button onClick={() => removeItem(producto.id)}>borrar</button>
            </div>
            <div className='cart-product-details flex-end'>
              <span>$ {producto.price * producto.cantidad}</span>
            </div>
          </div>
        </div>
      ))}
      <div className='final-total'>
        <div className='col'>
          <span className='small'>Para remover todos los articulos haga click en el siguiente boton</span>
          <div className='remove-btn'>
            <button onClick={clearItems}>remover todos</button>
          </div>
        </div>
        <div className='col'>
          <div className='total'>
            <span>Total :</span>
            <p>$ {total()}</p>
          </div>
          <button onClick={terminarCompra} className='boton'>Terminar la compra</button>
        </div>
      </div>
    </div>
  )
}

export default Cart