import React, { Component } from 'react'
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import API from '../API'

const by = prop => {
  const sorter = (a, b) => {
    if (prop) {
      a = a[prop]
      b = b[prop]
    }

    if (a > b) return 1
    if (a < b) return -1
    return 0
  }

  sorter.descending = (a, b) => 0 - sorter(a, b)

  return sorter
}

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    sortBy: 'Alphabetically',
    filterBy: 'All'
  }

  updateSort = e => {
    this.setState({ sortBy: e.target.value })
  }

  updateFilter = e => {
    this.setState({ filterBy: e.target.value })
  }

  addToPortfolio = stock => {
    if (this.state.portfolio.includes(stock)) return

    this.setState({ portfolio: [stock, ...this.state.portfolio] })
  }

  removeFromPortfolio = stockToRemove => {
    const portfolio = this.state.portfolio.filter(
      stock => stock.id !== stockToRemove.id
    )
    this.setState({ portfolio: portfolio })
  }

  getStocks = () => {
    API.getStocks().then(stocks => this.setState({ stocks }))
  }

  getFilteredStocks = stocks => {
    return this.state.filterBy === 'All'
      ? stocks
      : stocks.filter(stock => stock.type === this.state.filterBy)
  }

  getSortedStocks = stocks => {
    if (this.state.sortBy === 'Alphabetically') {
      return [...stocks].sort(by('name'))
    }
    if (this.state.sortBy === 'Price') {
      return [...stocks].sort(by('price'))
    }
  }

  componentDidMount () {
    this.getStocks()
  }

  render () {
    const filteredStocks = this.getFilteredStocks(this.state.stocks)
    const sortedStocks = this.getSortedStocks(filteredStocks)
    return (
      <div>
        <SearchBar
          updateFilter={this.updateFilter}
          updateSort={this.updateSort}
          filterBy={this.state.filterBy}
          sortBy={this.state.sortBy}
        />

        <div className='row'>
          <div className='col-8'>
            <StockContainer
              stocks={sortedStocks}
              addToPortfolio={this.addToPortfolio}
            />
          </div>
          <div className='col-4'>
            <PortfolioContainer
              portfolio={this.state.portfolio}
              removeFromPortfolio={this.removeFromPortfolio}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default MainContainer
