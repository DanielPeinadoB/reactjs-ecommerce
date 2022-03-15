const Item = ({ producto }) => {

  return (
    <div className='item-list'>
      <div className='item-card'>
        <div className='item-top'>
          <span className='item-title'>{producto.title}</span>
        </div>
        <div>
          <img src="/" alt="" />
        </div>
        <div>
          <span className='item-description'>{producto.description}</span>
        </div>
        <div>
          <span>$ {producto.price}</span>
        </div>
      </div>
    </div>
  )
}

export default Item