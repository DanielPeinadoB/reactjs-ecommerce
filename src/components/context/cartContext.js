import { createContext, useState } from "react";

export const contexto = createContext([])

const {Provider} = contexto


const MiProvider = ({children}) => {

  const [carrito, setCarrito] = useState([])

  const unidades = () => {
    const numeros = carrito.reduce((x, y) => x + y.cantidad, 0);
    return numeros;
  };

  const isInCart = (id) => {
    const yaExisteEnCarrito = carrito.find((i) => i.id === id);
    if (yaExisteEnCarrito !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  const addItem = (producto, counter) => {
    total();
    if (isInCart(producto.id)) {
      sumarCantidad(counter, producto);
    } else {
      setCarrito([...carrito, {...producto, cantidad: counter }])
    }
  }

  const sumarCantidad = (counter, producto) => {
    const cantidad = [...carrito];
    cantidad.forEach((c) => {
      c.id === producto.id && (c.cantidad += counter)
    });
    setCarrito(cantidad)
  }

  const total = () => {
    const sumaTotal = carrito.reduce((x, y) => x + y.price * y.cantidad, 0);
    return sumaTotal
  }

  const removeItem = (producto) => {
    const itemRemoved = carrito.filter((i) => i.id !== producto);
    setCarrito(itemRemoved);
  };

  const clearItems = () => setCarrito([])

  const valorDelContexto = {
    carrito : carrito,
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