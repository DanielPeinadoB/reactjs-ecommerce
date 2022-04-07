import {useState} from 'react'

// ItemCount - Se usa para aumentar o disminuir el counter deseado
// Funcion onClick para confirmar y que se agregue al carrito

const ItemCount = ({ stock, onAdd }) => {

    let [counter, setCounter] = useState(0)

    const add = () => {
        if(counter < stock) {
            setCounter(counter + 1)
        }
    }

    const substract = () => {
        if(counter > 0)
        setCounter(counter - 1)
    }

  return (
    <div className='counter-area'>
        <div>Cantidad</div>
        <div className='counter-meter'>
            <button onClick={substract}>-</button>
            <h2> {counter} </h2>
            <button onClick={add}>+</button>
        </div>
        <button onClick={() => onAdd(counter)} disabled={counter === 0}>Agregar al carrito</button>
        <div>
            <span className='stock-limit'>Solo quedan {stock - counter} unidades</span>
        </div>
    </div>
  )
}

export default ItemCount