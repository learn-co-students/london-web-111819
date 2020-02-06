import React from 'react'

import ItemList from '../components/ItemList'
import API from '../API'

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexWrap: 'wrap'
}

class Inventory extends React.Component {
  state = {
    items: []
  }

  componentDidMount () {
    if (this.props.username === null) {
      this.props.history.push('/signin')
    } else {
      API.getInventory().then(items => this.setState({ items }))
    }
  }

  render () {
    const { items } = this.state

    return (
      <div style={style} className='user-list'>
        <h1>Inventory Page</h1>
        <h2>Here's your inventory:</h2>
        <ItemList items={items} />
      </div>
    )
  }
}

export default Inventory
