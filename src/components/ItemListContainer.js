import React from 'react'

const ItemListContainer = ({product, category}) => {

    //const {username, password} = props

  return (
    <div className='container-top'>
        <span className='p-text'>{product}</span>
        <span className='c-text'>{category}</span>
    </div>
  )
}

export default ItemListContainer