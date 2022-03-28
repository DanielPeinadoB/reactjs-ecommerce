import React from 'react'
import ItemList from './ItemList'
import {useParams} from "react-router-dom"
import { useEffect, useState } from 'react'
import { toast } from  'react-toastify'
//firebase
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

    //Se busca la collection en la db(./firebase) con el nombre de "dbItems"
    const productosCollection = collection(db,"dbItems")
    const consulta = getDocs(productosCollection)

    consulta
      //trae los productos a la pagina principal (/)
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

      //muestra todas las consultas con la variante "x"

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