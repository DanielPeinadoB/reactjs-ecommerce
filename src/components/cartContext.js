import { createContext, useState } from "react";

export const contexto = createContext()

const {Provider} = contexto

const MiProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([
    {
      id: 1,
      nombre: "camisa",
      precio: 50,
      cantidad: 1
    },
    {
      id: 2,
      nombre: "pantalon",
      precio: 100,
      cantidad: 2
    }
  ])
  const [cantidad, setCantidad] = useState(0)
  const [total, setTotal] = useState(0)

  const valorDelContexto = {
    carrito : carrito,
    cantidad : cantidad,
    total : total,
  }
    return (
        <Provider value={valorDelContexto}>
          {children}
        </Provider>
    )
}

export default MiProvider