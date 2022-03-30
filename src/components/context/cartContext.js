import { createContext, useState } from "react";

export const contexto = createContext()

const {Provider, Consumer} = contexto


const MiProvider = ({children}) => {

  const [carrito, setCarrito] = useState([])
  const [cantidad, setCantidad] = useState(0)
  const [total, setTotal] = useState(0)

  const addItem = (producto, nuevaCantidad) => {

    console.log(producto,nuevaCantidad)
    // verificar que el producto a agregar ya existe, no se agrega, y si existe se pushea al final
    const copia = carrito.slice(0)
    copia.push({ ...producto,nuevaCantidad})
    setCarrito(copia)
    setCantidad(cantidad + nuevaCantidad)
    setTotal(total + producto.price * nuevaCantidad)
    //ItemDetail
    /*if(yaExisteEnCarrito(id)){

    }else{

    }*/

  }

  const isInCart = (id) => {

  }
  
  const removeItem = (item) => {
    const itemRemoved = carrito.filter((i) => i.id !== item);
    setCarrito(itemRemoved);
  };

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