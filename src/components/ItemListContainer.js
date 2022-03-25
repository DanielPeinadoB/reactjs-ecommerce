import React from 'react'
import ItemList from './ItemList'
import {useParams} from "react-router-dom"
import { useEffect, useState } from 'react'
import { toast } from  'react-toastify'
import { db } from './firebase'
import { collection, getDocs } from "firebase/firestore"

const ItemListContainer = () => {

  //dbItems - nombre de la db de los items en firebase

  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {

    setLoading(true)

    const productosCollection = collection(db,"dbItems")
    const consulta = getDocs(productosCollection)

    consulta
      .then((resultado) => {
        const products = resultado.docs.map((doc)=>{
          return doc.data()
        })

        setProductos(products)
        })
      .catch(() => {
        toast.error("Error al cargar los productos")
      })
      .finally(() => {
        setLoading(false);
      })

  },[idCategory])

  if(idCategory) {
    return (
      <div className='padding'>
        <ItemList productos={categorias} />
      </div>
    )
  } else {
      return (
        <div className='padding'>
          {loading ? <h2>Cargando...</h2> : <ItemList productos={productos} />}
        </div>
      )
  }
}

export default ItemListContainer