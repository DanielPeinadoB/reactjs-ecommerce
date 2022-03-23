import {useState} from 'react'


const ItemCount = ({ initial, stock, onAdd }) => {

    let [estado, setEstado] = useState(initial)

    const increase = () => {
        if(estado < stock) {
            setEstado(estado + 1)
        }
    }

    const decrease = () => {
        if(estado > initial)
        setEstado(estado - 1)
    }

    let [remain, setStock] = useState(stock)

    const handleAdd = () => {
        //setEstado(0)
        onAdd(estado)
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
        <button onClick={handleAdd}>Agregar al carrito</button>
        <div>
            <span className='stock-limit'>Solo quedan {remain} unidades</span>
        </div>
    </div>
  )
}

export default ItemCount