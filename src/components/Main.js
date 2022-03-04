import React from 'react'
import ItemListContainer from './ItemListContainer'
import ItemCount from './ItemCount'

const Main = () => {
  return (
    <main className='main'>
      <div className='container-small'>
        <ItemListContainer product="Producto 01" category="category 01"/>
        <nav>
          <img src="/" alt="" />
        </nav>
        <ItemCount/>
      </div>
    </main>
  )
}

export default Main