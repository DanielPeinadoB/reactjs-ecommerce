import React from 'react'
import ItemList from './ItemList'
import { useEffect, useState } from 'react'

// ILC - Area 1 - contiene ItemList
// Es el area donde se encuentran el box de cards

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

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  // setup de tiempo diferido de 2 segundos

  useEffect(() => {

    const pedido = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosIniciales)
      },2000)
    })

    pedido
    .then((resultado) => {
      console.log("Estuvo bien")
      setProductos(resultado)
    })
    .catch((error) => {
      console.log("Estuvo mal")
    })

  })

  return (
    <div className='padding'>
        <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer