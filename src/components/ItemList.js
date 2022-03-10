import Item from './Item'

// IL - Area 2 - Contiene Item
// Es el area donde se colocaran las cards de los productos

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