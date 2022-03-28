import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ItemDetail from './ItemDetail';
//import { db } from './firebase'
//import { collection, getDocs } from "firebase/firestore"


const ItemDetailContainer = () => {

  const [loading, setLoading] = useState(true);
  const [item, getItem] = useState({});
  const {idProduct} = useParams()

  /*Firestore
  useEffect(() => {

    setLoading(true)

    const productosCollection = collection(db,"dbItems")
    const itemDetail = getDocs(productosCollection)

    itemDetail
      .then((resultado) => {
        const itemDetail = resultado.docs.map((doc) => {
          return doc.data()
        })

        console.log(itemDetail)

        getItem(itemDetail)
      })
      .catch()
      .finally()

  },[])*/
  // Usando fakestoreapi.com
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${idProduct}`)
    .then((response) => {
      return response.json()
    })
    .then((respuesta) => {
      getItem(respuesta)
    })
    .catch(() => {
      toast.error("Error al cargar el producto")
    })
    .finally(() => {
      setLoading(false)
    })
  })

  return (
    <div className='padding'>
      {loading ? <h2>Cargando...</h2> : <ItemDetail item={item} />}
    </div>
  )

  
}

export default ItemDetailContainer