import {useState} from 'react'


const ItemCount = () => {

    const inicial = 0
    const stock = 20

    let [estado, setEstado] = useState(inicial)

    const increase = () => {
        setEstado(estado + 1)
    }

    const decrease = () => {
        setEstado(estado - 1)
    }

    let [remain, setStock] = useState(stock)

    const stockleft = () => {
        setStock(stock - estado)
    }

  return (
    <div className='counter-area'>
        <div>Cantidad</div>
        <div className='counter-meter'>
            <button onClick={decrease}>-</button>
            <h2> {estado} </h2>
            <button onClick={increase}>+</button>
        </div>
        <button onClick={stockleft}>Agregar</button>
        <div>
            <span className='stock-limit'>Solo quedan {remain} unidades</span>
        </div>
    </div>
  )
}

export default ItemCount