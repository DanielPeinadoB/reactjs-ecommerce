import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify'
const App = () => {

  const [categories, setCategories] = useState([])
  const {idCategory} = useParams()

  useEffect(() => {
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
  },[idCategory])

  return (
      <BrowserRouter>
        <Header categories={categories}/>
        <Main />
        <Footer/>
        <ToastContainer />
      </BrowserRouter>
    )
}

export default App