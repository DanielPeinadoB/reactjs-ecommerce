import React from 'react'
import ItemList from './ItemList'
import {useParams} from "react-router-dom"
import { useEffect, useState } from 'react'
import { toast } from  'react-toastify'
import { db } from "./firebase"
import { collection , getDocs } from "firebase/firestore"

const ItemListContainer = () => {

  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {

    const productosCollection = collection(db,"productos")
    const consulta = getDocs(productosCollection)

    consulta
      .then((resultado)=>{
        
        const array_de_resultados = resultado.docs.map((doc)=>{
          return doc.data()
          //console.log(doc.id)
        })

        //console.log(array_de_resultados)
        setProductos(array_de_resultados)
        setLoading(false)
      })
      .catch(()=>{
        toast.error("Error al cargar los productos")
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
          <ItemList productos={productos} />
        </div>
      )
  }
}

export default ItemListContainer