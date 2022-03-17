import React from 'react'
import ItemList from './ItemList'
import {useParams} from "react-router-dom"
import { useEffect, useState } from 'react'
import { toast } from  'react-toastify'

// ILC - Area 1 - contiene ItemList
// Es el area donde se encuentran el box de cards

/*Conjunto de item:

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
]*/

const ItemListContainer = () => {

  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])
  const {idCategoria} = useParams()

  /* usando toast y anterior
  useEffect(() => {

    //toast.info("Trayendo productos...")

    const pedido = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosIniciales)
        //rej(productosIniciales)
      },2000)
    })

    pedido
    .then((resultado) => {
      //toast.dismiss()
      setProductos(resultado)
      console.table(resultado)
    })
    .catch((error) => {
      toast.error("Error al traer los productos")

    })
    .finally(() => {
      setLoading(false)
    })

  },[])*/

  // Usando fakestoreapi.com
  useEffect(() => {

    //toast.info("Trayendo productos...")

    fetch('https://fakestoreapi.com/products')
    .then ((response) => {
      return response.json()
    })
    .then((resultado) => {
      setProductos(resultado)
      console.table(resultado)
    })
    .catch(() => {
      toast.error("Error al cargar los productos")
    })
    .finally(() => {
      setLoading(false)
    })
    
  },[idCategoria])

  if(loading) {
      return <h1>Cargando...</h1>
  } else {
      return (
        <div className='padding'>
          <ItemList productos={productos} />
        </div>
      )
  }
}

export default ItemListContainer