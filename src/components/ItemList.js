import React from 'react'
import Item from './Item'
import { useEffect, useState } from 'react'

//Agrupador de un set de componentes de Item.js

//Conjunto de item:

let productosIniciales = [
  {
    id: 1,
    title: "Product 01",
    description: "description of product 01",
    price: 100
  },
  {
    id: 2,
    title: "Product 02",
    description: "description of product 02",
    price: 200
  },
  {
    id: 3,
    title: "Product 03",
    description: "description of product 03",
    price: 300
  },
]


// IL - Area 2 - Contiene Item
// Es el area donde se colocaran las cards de los productos

const ItemList = () => {

  const [productos, setProductos] = useState([])

  // setup de tiempo diferido de 2 segundos

  useEffect(() => {
    console.log("Ejecutando useEffect")

    const pedido = new Promise((res,rej) => {
      setTimeout(() => {
        res(productosIniciales)
      }, 2000);
    })

    pedido
    .then((resultado) => {
      console.log("Estuvo bien")
      setProductos(resultado)
    })
    .catch((error) => {
      console.log("Estuvo mal")
    })

  },[])

    console.log(productos)

  return (
    <div className='item-list'>
      <div className='item-card'>
        <div className='item-top'>
          {productos.map((producto) => {
            return <span key={producto.id} className='item-title'>item title</span>
          })}
        </div>
        <div>
          <img src="/" alt="" />
        </div>
        <div>
          <span className='item-description'>item description</span>
        </div>
        <div>
          <span>item price</span>
        </div>  
        <Item/>
      </div>
    </div>
  )
}

export default ItemList