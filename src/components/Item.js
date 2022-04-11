import { Link } from 'react-router-dom'

const Item = ({ producto }) => {

  return (
    <div className='item-list hover-effect'>
      <Link to={`/product/${producto.id}`} className='nodeco item-card'>
        <div className='item-img'>
          <img src={producto.prodimg} alt=""/>
        </div>
        <div className='item-top'>
          <span className='item-title'>{producto.title}</span>
        </div>
        <div>
          <span className='nodeco iprice'>$ {producto.price}</span>
        </div>
      </Link>
    </div>
  )
}

export default Item