import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ItemDetail from './ItemDetail';

/*Conjunto de items:

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

const ItemDetailContainer = () => {

  const [loading, setLoading] = useState(true);
  const [item, getItem] = useState({});
  const {idProduct} = useParams()


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
      getItem(resultado)
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