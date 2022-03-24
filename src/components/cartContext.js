import { createContext } from "react";

export const contexto = createContext({
  carrito : [],
  cantidad : 0,
  total : 0,
})

const {Provider} = contexto

const MiProvider = () => {
    return (
        <Provider>
        </Provider>
    )
}