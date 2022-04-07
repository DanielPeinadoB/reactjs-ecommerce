import Item from './Item'

// Se traen los datos de los productos y organiza por el id

const ItemList = ({ productos }) => {

  return (
    <section className="productos">
      {productos.map((producto) => {
        return <Item key={producto.id} producto={producto}/>
      })}
    </section>
  )
}

export default ItemList