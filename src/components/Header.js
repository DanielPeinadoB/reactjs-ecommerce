import React, { useContext } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { contexto } from './context/cartContext';
//firebase
//import { db } from './firebase'
//import { collection, getDocs, query, where } from "firebase/firestore"
//getDocs     - Traer muchos documentos (un grupo de)
//getDoc      - Traer de a uno
//collection  - Referirte a una colección X, referida en firebase.js
//updateDoc   - Actualizar un documento como el stock luego de una compra
//addDoc      - 
//query       - Filtro, como de categoria
//where

//import { toast } from 'react-toastify'

const Header = () => {

  const {cantidad} = useContext(contexto)

  //variable categories
  const [categories, setCategories] = useState([])

  useEffect(() => {

    /*fire
    //const categoriesRef = collection(db, "dbItems")
    //const q = query(categoriesRef, where("categoryid", "==", "keyboards"))
    //const consulta = getDocs(q)
    
    console.log(q)
    console.log(consulta)   //da una promise

    consulta
      .then((resultado) => {
        resultado.docs.forEach((doc) => {
          console.log(doc.data())
        })
      })
      .catch(() => {
        toast.error("Error al cargar los productos")
      })*/
    fetch('https://fakestoreapi.com/products/categories')
    .then((response) => {
      return response.json()
    })
    .then((resultado) => {
      setCategories(resultado)
      console.table(resultado)
    })
    .catch(() => {
      toast.error("Error al cargar los productos")
    })
    .finally(() => {
      
    })
  },[])

  return (
    <>
      <nav className='navbar bg-dark'>
        <div className='container container-top'>
          <Link to="/" className='navbar-brand'>
              <span className='brand-text'>monkee games</span>
          </Link>
          <div className='nav-container'>
            <div className='me-auto'></div>
            <div className='nav-upperline'>
              <input placeholder='Search your product...' autoComplete='off' />
              <div className='nav-item'>
                <span>Welcome!</span>
                <span>Daniel</span>
              </div>
              <Link to="login">
                <span>Log in</span>
              </Link>
              <div className='nav-item'>
                <Link to="/">
                  <CartWidget/>
                </Link>
                {cantidad}
              </div>
            </div>
          </div>
        </div>
        <div className='nav-scroller bg-dark'>
        <nav className='container nav nav-underline'>
          {categories.map((category) => {
            return <NavBar key={category} category={category}/>
          })}
        </nav>
        </div>
      </nav>
    </>
  )
}

export default Header