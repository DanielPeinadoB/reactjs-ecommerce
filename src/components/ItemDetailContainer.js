import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

  const [item, getItem] = useState({});
  const [loading, setLoading] = useState(true);
  const {idProduct} = useParams()

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

  if(loading) {
    return <h1>Cargando...</h1>
  } else {
    return (
      <div className='padding'>
          <ItemDetail item={item} />
      </div>
    )
  }

  
}

export default ItemDetailContainer