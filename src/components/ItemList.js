import React from 'react'
import Item from './Item'

// IL - Area 2 - Contiene Item
// Es el area donde se colocaran las cards de los productos

const ItemList = () => {
  return (
    <div className='item-list'>
        <Item uid="hola" title="Producto" price="500.00" pictureUrl="IMAGEN" />
    </div>
  )
}

export default ItemList