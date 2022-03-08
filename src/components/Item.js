import React from 'react'

const Item = ({uid, title, price, pictureUrl}) => {
  return (
    <div className='item-card'>
        <div>
            <h2 className='item-name'>{title}</h2>
        </div>
        <div>
            <img src="/" alt="" />
            <span>{pictureUrl}</span>
        </div>
        <div>
            <span>Descripción del producto</span>
        </div>
        <div>
            <span className='item-uid'>{uid}</span>
        </div>
        <div>
            <span className='item-price'>{price}</span>
        </div>
    </div>
  )
}

export default Item