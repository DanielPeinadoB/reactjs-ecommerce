import React from 'react'
import ItemList from './ItemList'
import {useParams} from "react-router-dom"
import { useEffect, useState } from 'react'
import { toast } from  'react-toastify'
//firebase
import { db } from './firebase'
import { collection, getDocs, query, where } from "firebase/firestore"

// Se definen los productos de la base de datos de firebase

const ItemListContainer = () => {

  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {

    if(!idCategory){
      //Se busca la collection en la db(./firebase) con el nombre de "dbItems"
      const productosCollection = collection(db,"dbItems")
      const pedido = getDocs(productosCollection)

      pedido
        .then (resultado => setProductos(resultado.docs.map(doc => doc.data())))
        .catch(() => toast.error("Error al cargar los productos"))
        .finally(() => setLoading(false))
    }else{
      //Filtro de los items por categoria (categoryid)
      const productosCollection = collection(db,"dbItems")
      const filtro = query(productosCollection,where("categoryid", "==", idCategory))
      const pedido = getDocs(filtro)

      pedido
        .then(res => setProductos(res.docs.map(doc => doc.data())))
        //usando el Auto-ID de Firebase
        //.then(res => setProductos(res.docs.map(doc => ({id: doc.id, ...doc.data()} ))))
        .catch(() => toast.error("Error al cargar los productos"))
        .finally(() => setLoading(false))

    }
    
  },[idCategory])

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