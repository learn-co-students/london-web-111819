import React from 'react'
import Item from './Item'

const ItemList = ({ items }) => {
  if (items.length === 0) return <p>Sorry, you don't have any items.</p>
  return items.map(item => <Item key={item.id} item={item} />)
}

export default ItemList
