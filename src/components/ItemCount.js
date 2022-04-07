import {useState} from 'react'


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
    </div>
  )
}

export default ItemCount