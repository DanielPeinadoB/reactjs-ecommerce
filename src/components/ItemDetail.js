import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { contexto } from './context/cartContext';

const ItemDetail = ({item}) => {

  const [seleccionado, setSeleccionado] = useState(0)
  const {addItem} = useContext(contexto)

  const onAdd = ( cantidadSeleccionada ) => {
    console.log('Añadir al carrito', cantidadSeleccionada, 'und')
    setSeleccionado(cantidadSeleccionada);
    addItem(item,cantidadSeleccionada)
  }

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
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        <Link to="/cart">Ir al carrito</Link>
      </div>
    </div>
  )
}

export default ItemDetail