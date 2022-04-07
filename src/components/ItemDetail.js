import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';

// Es el detalle de los productos, ahora item
// Se vincula el ItemCount

const ItemDetail = ({item, onAdd}) => {

  return (
    <div className='item-detail'>
      <div className='item-img-detail'>
        <img src={item.prodimg} alt="" className='item-detail-image' />
      </div>
      <div className='item-detail-text'>
        <div className='item-detail-title'>{item.title}</div>
        <div className='item-detail-category'>{item.categoryid}</div>
        <div className='item-detail-description'>{item.description}</div>
        <div className='item-detail-price'>$ {item.price}</div>
        <ItemCount item={item} stock={item.stock} onAdd={onAdd} />
        <Link to="/cart">Ir al carrito</Link>
      </div>
    </div>
  )
}

export default ItemDetail