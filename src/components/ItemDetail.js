import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div className='item-list'>
      <div className='item-img-detail'>
        <img src={item.image} alt="" />
      </div>
      <div>{item.title}</div>
      <div>{item.category}</div>
      <div>{item.description}</div>
      <div>{item.price}</div>
    </div>
  )
}

export default ItemDetail