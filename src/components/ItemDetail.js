import React from 'react'

const ItemDetail = ({item}) => {
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
      </div>
    </div>
  )
}

export default ItemDetail