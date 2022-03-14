import React from 'react'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
//import ItemCount from './ItemCount'

const Main = () => {
  return (
    <main className='main'>
      <div className='item-list-container'>
        <ItemListContainer/>
      </div>
      <div className='item-list-container'>
        <ItemDetailContainer/>
      </div>
    </main>
  )
}

export default Main