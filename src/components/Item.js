import { Link } from 'react-router-dom'

//los campos deben de ser los mismos a los de la base de datos

const Item = ({ producto }) => {

  return (
    <div className='item-list'>
      <div className='item-card'>
        <div className='item-top'>
          <span className='item-title'>{producto.title}</span>
        </div>
        <div className='item-img'>
          <img src={producto.prodimg} alt=""/>
        </div>
        <div>
          <span>$ {producto.price}</span>
        </div>
        <div>
          <Link to={`/product/${producto.id}`}>ver detalle</Link>
        </div>
      </div>
    </div>
  )
}

export default Item