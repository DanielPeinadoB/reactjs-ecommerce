import { createContext, useState } from "react";

export const contexto = createContext([])

const {Provider} = contexto


const MiProvider = ({children}) => {

  const [carrito, setCarrito] = useState([])
  const [cantidad, setCantidad] = useState(0)
  const [total, setTotal] = useState(0)

  console.log(carrito, cantidad, total)

  const unidades = () => {
    const cantidad = carrito.reduce((x, y) => x + y.cantidad, 0);
    return cantidad;
  };

  const addItem = (producto, nuevaCantidad) => {
    // verificar que el producto a agregar ya existe, no se agrega, y si existe se pushea al final
    /*const isInCart = carrito.find((item) => item.id === producto.id);
    if(isInCart) {
      setCarrito(carrito.map((item) => item.id === isInCart.id ?
      {...isInCart, nuevaCantidad: isInCart.cantidad + cantidad}: item))
    } else {
      setCarrito([...carrito, {...producto, nuevaCantidad: cantidad }])
    };

    console.log(cantidad, nuevaCantidad)*/
    

    const copia = carrito.slice(0)
    copia.push({ ...producto,nuevaCantidad})
    setCarrito(copia)
    setCantidad(cantidad + nuevaCantidad)
    setTotal(total + producto.price * nuevaCantidad)
    console.log(cantidad, nuevaCantidad)
    //ItemDetail
    /*if(yaExisteEnCarrito(id)){

    }else{

    }*/

  }
  
  //remueve los items de manera individual
  const removeItem = (producto, nuevaCantidad) => {
    const itemRemoved = carrito.filter((i) => i.id !== producto);
    setCarrito(itemRemoved);

    console.log(cantidad, nuevaCantidad)
  };

  //remueve los todos items
  const clearItems = () => {
    setCarrito([]);
    setTotal(0)
  }

  const valorDelContexto = {
    carrito : carrito,
    cantidad : cantidad,
    total : total,
    unidades : unidades,
    addItem : addItem,
    removeItem : removeItem, 
    clearItems : clearItems,
  }

  return (
    <Provider value={valorDelContexto}>
      {children}
    </Provider>
  )
}

export default MiProvider