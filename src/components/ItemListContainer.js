import React from 'react'

const ItemListContainer = ({username, message}) => {

    //const {username, password} = props

  return (
    <div className='nav-login'>
        <span>{message}</span>
        <span>{username}</span>
    </div>
  )
}

export default ItemListContainer