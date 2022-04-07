import { createContext, useState } from "react";

export const contexto = createContext([])

const {Provider} = contexto


const MiProvider = ({children}) => {

  const [carrito, setCarrito] = useState([])

  //Unidades al lado del carrito
  const unidades = () => {
    const numeros = carrito.reduce((x, y) => x + y.cantidad, 0);
    return numeros;
  };

  //Ya existe en el carrito??
  const isInCart = (id) => {
    const yaExisteEnCarrito = carrito.find((i) => i.id === id);
    if (yaExisteEnCarrito !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  //Agregar los items de ItemDetailContainer al carrito
  const addItem = (producto, counter) => {
    total();
    if (isInCart(producto.id)) {
      sumarCantidad(counter, producto);
    } else {
      setCarrito([...carrito, {...producto, cantidad: counter }])
    }
    console.log(producto)
    console.log(counter)
  }

  //sumar las cantidades
  const sumarCantidad = (counter, producto) => {
    const cantidad = [...carrito];
    cantidad.forEach((c) => {
      c.id === producto.id && (c.cantidad += counter)
    });
    setCarrito(cantidad)
  }

  //suma total del carrito
  const total = () => {
    const sumaTotal = carrito.reduce((x, y) => x + y.price * y.cantidad, 0);
    return sumaTotal
  }

  //remueve items individual
  const removeItem = (producto) => {
    const itemRemoved = carrito.filter((i) => i.id !== producto);
    setCarrito(itemRemoved);
  };

  //Remueve todos los items
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