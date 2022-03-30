import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import Cart from "./Cart"
//import ItemCount from './ItemCount'

const Main = () => {
  return (
    <main className="main">
      <div className='item-list-container'>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:idCategory" element={<ItemListContainer/>} />
          <Route path="/product/:idProduct" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </div>
    </main>
  )
}

export default Main