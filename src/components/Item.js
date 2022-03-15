const Item = ({ producto }) => {

  return (
    <div className='item-list'>
      <div className='item-card'>
        <div className='item-top'>
          <span className='item-title'>{producto.title}</span>
        </div>
        <div className='item-img'>
          <img src={producto.image} alt=""/>
        </div>
        <div>
          <span>$ {producto.price}</span>
        </div>
        <div>
          <span className='item-description'>ver detalle</span>
        </div>
      </div>
    </div>
  )
}

export default Item