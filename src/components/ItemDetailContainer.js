import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ItemDetail from './ItemDetail';
import { db } from './firebase'
import { collection, getDocs, query, where } from "firebase/firestore"
import { contexto } from './context/cartContext';

const ItemDetailContainer = () => {

  const [loading, setLoading] = useState(true);
  const [item, getItem] = useState({});
  const {idProduct} = useParams()
  const { addItem } = useContext(contexto)

  useEffect(() => {

    const productosCollection = collection(db,"dbItems")
    const filtro = query(productosCollection, where("id", "==", Number(idProduct)))
    const pedido = getDocs(filtro)

    pedido
      .then(res => getItem(res.docs[0].data()))
      .catch(() => toast.error("Error al cargar los productos"))
      .finally(() => setLoading(false))
  },[idProduct])

  const onAdd = ( counter ) => {
    addItem(item, counter)
  }
  
  if (loading) {
    return <h1>Cargando...</h1>
  } else {
    return (
      <div className='padding'>
        <ItemDetail item={item} onAdd={onAdd} />
      </div>
    )
  }
  

  
}

export default ItemDetailContainer