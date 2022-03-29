import { createContext, useState } from "react";

export const contexto = createContext()

const {Provider, Consumer} = contexto


const MiProvider = ({children}) => {

  const [carrito, setCarrito] = useState([
    {
      id : 1,
      nombre : "Camisa",
      precio : 50,
      cantidad : 1
    },
    {
      id : 2,
      nombre : "Pantalon",
      precio : 80,
      cantidad : 1
    }
  ])
  const [cantidad, setCantidad] = useState(0)
  const [total, setTotal] = useState(0)

  const addItem = (producto, cantidad) => {
    // verificar que el producto a agregar ya existe, no se agrega, y si existe se pushea al final
    const copia = carrito.slice(0)
    //ItemDetail
    /*if(yaExisteEnCarrito(id)){

    }else{

    }*/

  }

  const isInCart = (id) => {

  }
  
  const removeItem = (id) => {
    //filter
  }

  const clear = () => {
    setCarrito([])
  }

  const valorDelContexto = {
    carrito : carrito,
    cantidad : cantidad,
    total : total,
    addItem : addItem,
    removeItem : removeItem, 
    isInCart : isInCart,
    clear : clear
  }

  return (
    <Provider value={valorDelContexto}>
      {children}
    </Provider>
  )
}

export default MiProvider