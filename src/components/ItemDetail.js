import React from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) => {

  const [cantidad, setCantidad] = useState(0)

  const onAdd = ( cantidad ) => {
    setCantidad(cantidad);
    console.log('Añadir al carrito', cantidad, 'und')
  }

  return (
    <div className='item-detail'>
      <div className='item-img-detail'>
        <img src={item.image} alt="" className='item-detail-image' />
      </div>
      <div className='item-detail-text'>
        <div className='item-detail-title'>{item.title}</div>
        <div className='item-detail-category'>{item.category}</div>
        <div className='item-detail-description'>{item.description}</div>
        <div className='item-detail-price'>$ {item.price}</div>
        {cantidad === 0 ? (
          <ItemCount stock={20} initial={0} onAdd={onAdd} />
        ) : (
          <div className='resultado-agregar-itemdetail'>
            <span>Usted ha agregado {cantidad} und. haga click para</span>
            <Link to="/cart">Ir al carrito</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default ItemDetail