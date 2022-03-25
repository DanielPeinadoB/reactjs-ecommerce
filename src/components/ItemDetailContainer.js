import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ItemDetail from './ItemDetail';
import { db } from './firebase'
import { collection, getDocs } from "firebase/firestore"


const ItemDetailContainer = () => {

  const [loading, setLoading] = useState(true);
  const [item, getItem] = useState({});
  const {idProduct} = useParams()

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

  },[])

  return (
    <div className='padding'>
        <ItemDetail item={item} />
    </div>
  )

  
}

export default ItemDetailContainer